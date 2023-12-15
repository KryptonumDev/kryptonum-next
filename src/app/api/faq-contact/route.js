import { emailRegex } from "@/global/constants";
import sgMail from "@sendgrid/mail";
import { NextResponse } from "next/server";

const isValidEmail = (email) => {
	return emailRegex.test(email.toLowerCase());
};

const headers = {
	"Content-Type": "application/json",
	"Access-Control-Allow-Origin": "https://kryptonum.eu",
	"Access-Control-Allow-Methods": "POST",
};

export async function POST(req) {
	const data = await req.json();
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);

	if (data.message.trim().length === 0 || !isValidEmail(data.mail) || !data.check) {
		return NextResponse.json({ success: false }, { status: 422 }, { headers });
	}

	const message = {
		to: "michal@kryptonum.eu",
		from: "michal@kryptonum.eu",
		subject: "Formularz pod FAQ - kryptonum.eu",
		replyTo: `${data.mail}`,
		html: `
      <div>
        <div>
        <p><b>Email:</b> ${data.mail}</p>
        <p><b>Wiadomość:</b> ${data.message}</p>
        </div
      </div>
      `,
	};
	try {
		await sgMail.send(message);
		return NextResponse.json({ success: true }, { status: 200 }, { headers });
	} catch (error) {
		return NextResponse.json({ success: false }, { status: 500 }, { headers });
	}
}
