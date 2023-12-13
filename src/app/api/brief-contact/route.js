import { emailRegex } from "@/constants/regex";
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

	if (
		!isValidEmail(data.Client["e-mail"]) ||
		data.Client.name.trim().length === 0 ||
		!data.Date["privacy-policy"] ||
		data.Brand.experience.trim().length === 0
	) {
		return NextResponse.json({ success: false }, { status: 422 }, { headers });
	}

	const message = {
		from: "michal@kryptonum.eu",
		to: "michal@kryptonum.eu",
		subject: "Brief kontaktowy - kryptonum.eu",
		text: "Wiadomość z briefu kontaktowego.",
		replyTo: `${data.Client["e-mail"]}`,
		html: `
      <div>
        <div>
          <h1>Wiadomość z briefu kontaktowego</h1>
          <h2>Dane kontaktowe:</h2>
          <div>
            <p><b>Imię:</b> ${data.Client["name"]}</p>
            <p><b>Email:</b> ${data.Client["e-mail"]}</p>
          </div>
          <h2>Dane o marce:</h2>
          <div>
            <p><b>Marka teraz:</b> ${data.Brand.experience}</p>
            ${Object.keys(data.Brand)
							.map((key) => {
								if (key === "experience" || key === "additional info") {
									return null;
								}
								return data.Brand[key] ? `<p><b>${key}:</b> ${data.Brand[key]}</p>` : null;
							})
							.join("")}
            <p><b>Dodatkowe informacje:</b> ${data.Brand["additional info"] || "Brak"}</p>
          </div>
          <h2>Dane o projekcie:</h2>
          <div>
          ${
						data.Needed?.["Need website"]
							? `
            <p><b>Chce bloga:</b> ${data.Needed["Need website"]["blog"] ? "Tak" : "Nie"}</p>
            <p><b>Chce sklep internetowy:</b> ${
							data.Needed["Need website"]["e-commerce"] ? "Tak" : "Nie"
						}</p>
            <p><b>Chce aplikację webową:</b> ${
							data.Needed["Need website"]["website"] ? "Tak" : "Nie"
						}</p>
          `
							: ``
					}
            ${
							data.Needed?.["Need design"]
								? `
              <p><b>Chcę Księge znaku:</b> ${
								data.Needed["Need design"]["Brand book"] ? "Tak" : "Nie"
							}</p>
              <p><b>Chcę Grafiki do social mediów:</b> ${
								data.Needed["Need design"]["Social media graphics"] ? "Tak" : "Nie"
							}</p>
              <p><b>Chcę Grafiki do druku:</b> ${
								data.Needed["Need design"]["Print graphics"] ? "Tak" : "Nie"
							}</p>
              ${
								data.Needed["Need design"].Logo
									? `
                <p><b>Chcę logo:</b>Tak</p>
                <h3>Jakie chce logo:</h3>
                <p>Po skale od 1 do 7 która opcja jest mi bliżej.</p>
                <div>
                  <p>Klasyczne ${data.Needed["Need design"].Logo["old/new"]} Nowoczesne</p>
                  <p>Proste ${
										data.Needed["Need design"].Logo["simple/complicated"]
									} Skomplikowane</p>
                  <p>Delikatne ${
										data.Needed["Need design"].Logo["subtle/expressive"]
									} Wyraziste</p>
                  <p>Kobiece ${data.Needed["Need design"].Logo["feminine/masculine"]} Męskie</p>
                  <p>Organiczne ${
										data.Needed["Need design"].Logo["organic/geometric"]
									} Geometryczne</p>
                  <p>Radosne ${data.Needed["Need design"].Logo["happy/serious"]} Poważne</p>
                  <p>Ekonomiczne ${
										data.Needed["Need design"].Logo["economic/luxurious"]
									} Luksusowe</p>
                  <p>Oczywiste ${
										data.Needed["Need design"].Logo["obvious/symbolic"]
									} Symboliczne</p>
                </div>
                <p>Dodatkowe informacje: ${data.Needed["Logo additional inform"] || "Brak"}</p>
              `
									: `
              <p><b>Chcę logo:</b> Nie</p>
              `
							}
            `
								: ``
						}  
          </div>
          <h2>Dodatkowe informacje:</h2>
          <div>
            <p>Deadline: ${data["Deadline & Budget"].deadline || "Nieokreślony"}</p>
            <p>Budżet: ${data["Deadline & Budget"].budget || "Nieokreślony"}</p>
            <p>Dodatkowe informacje: ${
							data["Additional"]["Additional information"] || "Brak"
						}</p>
            <p>Data spotkania: ${data["Date"]["date"] || "Nieokreślona"}</p>
            <p>Zgoda na politykę prywatności: ${
							data["Date"]["privacy-policy"] ? "Tak" : "Nie"
						}</p>
          </div>
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
