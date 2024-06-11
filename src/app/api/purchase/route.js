import { NextResponse } from 'next/server';

export async function POST(request) {
  if (request.headers.get('x-forwarded-for') !== '138.68.104.42') {
    return NextResponse.json({
      success: false,
      message: 'You are not authorized to access this endpoint'
    }, { status: 401 });
  }

  const {
    event,
    customer_email,
    customer_first_name,
  } = await request.json();

  if (event !== 'single_product_bought' || !customer_email || !customer_first_name) {
    return NextResponse.json({
      success: false,
      message: 'Invalid request data'
    }, { status: 400 });
  }

  try {
    await fetch('https://connect.mailerlite.com/api/subscribers', {
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

    return NextResponse.json({
      success: true,
      message: 'User successfully added to newsletter.',
    }, { status: 200 });
  } catch {
    return NextResponse.json({
      success: false,
      message: 'Something went wrong while adding user to newsletter.'
    }, { status: 500 });
  }
}
