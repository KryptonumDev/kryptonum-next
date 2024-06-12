import { NextResponse } from 'next/server';

const AUTHORIZED_IP = '138.68.104.42';

export async function POST(request) {
  if (request.headers.get('x-forwarded-for') !== AUTHORIZED_IP) {
    return NextResponse.json({
      success: false,
      message: 'You are not authorized to access this endpoint'
    }, { status: 401 });
  }

  try {
    const {
      event,
      customer_email,
      customer_first_name,
      checkboxes: {
        newsletter,
      },
    } = await request.json();

    if (event !== 'single_product_bought') {
      return NextResponse.json({
        success: false,
        message: 'Invalid event type'
      }, { status: 400 });
    }

    if (!customer_email || !customer_first_name || !newsletter) {
      return NextResponse.json({
        success: false,
        message: 'Missing required fields'
      }, { status: 400 });
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Bearer ${process.env.MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        "email": customer_email,
        "fields": {
          "name": customer_first_name,
        },
        "groups": [
          "123838751207065286",
        ],
      }),
    });

    if (!response.ok) {
      return NextResponse.json({
        success: false,
        message: 'Something went wrong while adding user to the newsletter.',
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'User successfully added to newsletter.',
    }, { status: 200 });

  } catch {
    return NextResponse.json({
      success: false,
      message: 'Something went wrong while adding user to newsletter.',
    }, { status: 500 });
  }
}
