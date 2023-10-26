import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

export async function POST(req) {
	const headers = {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "https://kryptonum.eu",
		"Access-Control-Allow-Methods": "POST",
	};
	const data = await req.json();
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);

	const message = {
		to: "michal@kryptonum.eu",
		from: "michal@kryptonum.eu",
		subject: "Szybki formularz - kryptonum.eu",
		text: "Wiadomość z szybkiego formularza kontaktowego.",
    replyTo: `${data.mail}`,
    html: `
      <div>
        <div>
          <p><b>Imię:</b> ${data.name}</p>
          <p><b>Email:</b> ${data.mail}</p>
        </div
      </div>
      `,
	};
	try {
		await sgMail.send(message);
		NextResponse.json({ success: true }, { status: 200, headers });
	} catch (error) {
		NextResponse.json({ success: false }, { status: 500, headers });
	}
}
