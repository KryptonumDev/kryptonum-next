import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function POST(req, res) {
	const json = await req.json();
	sgMail
		.send({
			to: "michal@kryptonum.eu",
			from: "michal@kryptonum.eu",
			subject: "Szybki formularz - kryptonum.eu",
			text: "Wiadomość z szybkiego formularza kontaktowego.",
			replyTo: `${json.name}`,
			html: `
      <div>
        <div>
          <p><b>Imię:</b> ${json.name}</p>
          <p><b>Email:</b> ${json.mail}</p>
        </div
      </div>
      `,
		})
		.then(() => {
			// sgMail.send({
			//   to: req.body.mail,
			//   from: 'kryptonumstudio@gmail.com',
			//   subject: 'Kryptonum Studio - Formularz kontaktowy',
			//   text: 'Dziękujemy za kontakt, odpowiemy najszybciej jak to możliwe.',
			//   html: `
			//   <div>
			//     <div>
			//       <p>Dziękujemy za kontakt, odpowiemy najszybciej jak to możliwe.</p>
			//       <p>Tutaj jest kopia twojej wiadomości:</p>
			//       <p><b>Imię:</b> ${req.body.name}</p>
			//       <p><b>Telefon:</b> ${req.body.phone}</p>
			//       <p><b>Email:</b> ${req.body.mail}</p>
			//     </div
			//   </div>
			//   `,
			// })
			//   .then(() => {
			res.status(200).json({ success: true });
			// })
			// .catch(() => {
			//   res.status(400).send({
			//     statusMSG: 'Błąd wysyłania wiadomości do ciebie'
			//   });
			// })
		})
		.catch(() => {
			res.status(400).json({ success: false });
		});
}
