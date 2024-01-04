import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { removeHtmlTags } from '@/utils/functions';
import { domain } from '@/global/Seo';
import { regex } from '@/global/constants';

const resend = new Resend(process.env.RESEND_API_KEY);

const emailData = {
  from: 'Michał z Kryptonum <michal@kryptonum.eu>',
  to: 'Michał <michal@kryptonum.eu>',
};

const headers = {
  'Access-Control-Allow-Origin': domain,
  'Content-Type': 'application/json',
  'Access-Control-Allow-Methods': 'POST',
};

export async function POST(request) {
  const req = await request.json();
  const { email = '' } = req;

  if (!regex.email.test(email.toLowerCase())) {
    return NextResponse.json({ success: false }, { status: 422, headers });
  }

  const body = `
    <p>E-mail: <b>${email}</b></p>
    <br />
    <br />
    <p><em>Wyrażono zgodę na politykę prywatności</em></p>
	`;

  try {
    await resend.emails.send({
      from: emailData.from,
      reply_to: email,
      to: emailData.to,
      subject: `Wiadomość z Kryptonum.eu marketing dla administracji publicznej`,
      html: body,
      text: removeHtmlTags(body),
    });
    return NextResponse.json({ success: true }, { status: 200 }, { headers });
  } catch {
    return NextResponse.json({ success: false }, { status: 500 }, { headers });
  }
}
