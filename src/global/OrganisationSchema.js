export default function Organization() {
	return (
		<script type="application/ld+json">
			{JSON.stringify({
				"@context": "https://schema.org",
				"@type": "Organization",
				name: "Kryptonum",
				url: "https://kryptonum.eu/pl",
				telephone: "+48 793 272 020",
				email: [
					"kuba@kryptonum.eu",
					"michal@kryptonum.eu"
				],
				logo: "https://kryptonum.eu/kryptonum-logo.webp",
				description: "Kryptonum, to agencja interaktywna kompleksowo wspierająca Twój biznes online. Partner technologiczny na każdym etapie obecności firmy w internecie.",
				address: {
					"@type": "PostalAddress",
					streetAddress: "Aleja Komisji Edukacji Narodowej 103/61",
					addressLocality: "Warszawa",
					postalCode: "02-722",
					addressCountry: "PL",
				},
				contactPoint: [
					{
						"@type": "ContactPoint",
						telephone: "+48 793 272 020",
						contactType: "customer service",
					},
					{
						"@type": "ContactPoint",
						telephone: "+48 883 736 548",
						contactType: "customer service",
						availableLanguage: ["Polish", "English"],
					},
				],
				foundingDate: "2018-07-05",
				founders: [
					{
						"@type": "Person",
						name: "Michał Chrapek",
						jobTitle: "Co-founder",
						sameAs: [
							"https://www.facebook.com/michrapek",
							"https://www.linkedin.com/in/michal-chrapek/",
							"https://www.instagram.com/mi.chrapek/",
						],
					},
					{
						"@type": "Person",
						name: "Jakub Chrapek",
						jobTitle: "Co-founder",
						sameAs: [
							"https://www.facebook.com/chrapekuba/",
							"https://www.linkedin.com/in/kuba-chrapek",
							"https://www.instagram.com/kuba.chrapek/",
						],
					},
				],
				employees: [
					{
						"@type": "Person",
						name: "Bogdan Shevchenko",
						jobTitle: "Front-end developer",
						sameAs: "https://www.linkedin.com/in/bogdan-kryptonum",
					},
					{
						"@type": "Person",
						name: "Bogumił Milewski",
						jobTitle: "Fullstack developer",
						sameAs: ["https://www.linkedin.com/in/milewskibogumil/", "https://milewski.me/"],
					},
					{
						"@type": "Person",
						name: "Aneta Jasińska",
						jobTitle: "Copywriter",
						sameAs: [
							"https://www.linkedin.com/in/aneta-jasinska/",
							"https://www.last.fm/user/aneciaaak",
						],
					},
					{
						"@type": "Person",
						name: "Maciej Ociepka",
						jobTitle: "Designer",
						sameAs: "https://www.behance.net/maciejociepka",
					},
					{
						"@type": "Person",
						name: "Patrycja Pokładek",
						jobTitle: "Designer",
						sameAs: [
							"https://www.linkedin.com/in/patrycja-pokladek/",
							"https://www.instagram.com/pustakartka.art/",
						],
					},
					{
						"@type": "Person",
						name: "Oliwia Pałamarczuk",
						jobTitle: "Designer",
						sameAs: [
							"https://www.linkedin.com/in/oliwia-pa%C5%82amarczuk/",
							"https://www.behance.net/oliwiapalamarczuk",
						],
					},
					{
						"@type": "Person",
						name: "Damian Budny",
						jobTitle: "Designer",
						sameAs: [
							"https://www.linkedin.com/in/damian-budny/",
							"https://www.instagram.com/luksaridesign/",
							"https://www.facebook.com/Luksaridesign/",
							"https://www.behance.net/luksaridesign",
							"https://dribbble.com/Luksaridesign",
						],
					},
					{
						"@type": "Person",
						name: "Przemysław Kamiński",
						jobTitle: "Fullstack developer",
						sameAs: "https://www.linkedin.com/in/przemys%C5%82aw-kami%C5%84ski-a02bb3286",
					},
					{
						"@type": "Person",
						name: "Bartłomiej Lewicki",
						jobTitle: "Ekspert SEO",
						sameAs: "https://www.linkedin.com/in/bartlomiej-lewicki/",
					},
				],
				sameAs: [
					"https://www.tiktok.com/@kryptonum_pl",
					"https://dribbble.com/kryptonum",
					"https://www.behance.net/kryptonumstudio",
					"https://www.youtube.com/@kryptonum_pl",
					"https://twitter.com/kryptonum",
					"https://www.instagram.com/kryptonum_pl/",
					"https://www.facebook.com/Kryptonum/",
					"https://www.tiktok.com/@kryptonum_pl/",
					"https://www.linkedin.com/company/kryptonum/",
					"https://useme.com/pl/roles/contractor/kryptonum,290189/",
					"https://kryptonum.oferteo.pl/",
					"https://github.com/KryptonumDev/",
					"https://linkin.bio/kryptonum_pl",
					"https://clutch.co/profile/kryptonum",
				],
			})}
		</script>
	);
}
