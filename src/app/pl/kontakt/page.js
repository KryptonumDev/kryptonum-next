import Faq from "@/components/sections/Faq";
import Team from "@/components/sections/Team";
import ContactUs from "@/components/sections/contact/ContactUs";
import Helpdesk from "@/components/sections/contact/Helpdesk";
import Hero from "@/components/sections/contact/Hero";
import Pricing from "@/components/sections/contact/Pricing";
import Breadcrumbs from "@/global/Breadcrumbs";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";

export default async function ContactPage() {
	const {
		page: {
			hero_Heading,
			hero_Subheading,
			hero_Contact,
			contact_Email,
			contact_Tel,
			contact_Address,
			contact_Img,
			pricing_Paragraph,
			pricing_Paragraph2,
			pricing_Cta,
			helpDesk_Heading,
			helpDesk_Subheading,
			helpDesk_Paragraph,
			helpDesk_FormTitle,
		},
	} = await query();

	const breadcrumbs = [
    {
      name: "Kontakt",
      link: "/pl/kontakt"
    }
  ];

	return (
		<>
    <main id="main">
		<Breadcrumbs breadcrumbs={breadcrumbs}/>
			<Hero
				data={{
					heading: hero_Heading,
					paragraph: hero_Subheading,
				}}
				heading={hero_Heading}
				subheading={hero_Subheading}
				contact={hero_Contact}
			/>
			<ContactUs
				data={{
					contact_Email,
					contact_Tel,
					contact_Address,
					contact_Img,
				}}
			/>
			<Pricing
				data={{
					pricing_Paragraph,
					pricing_Paragraph2,
					pricing_Cta,
				}}
			/>
			<Helpdesk
				data={{
					helpDesk_Heading,
					helpDesk_Subheading,
					helpDesk_Paragraph,
					helpDesk_FormTitle,
				}}
			/>
			<Team />
			<Faq />
      </main>
		</>
	);
}

export async function generateMetadata() {
	const {
		page: { seo },
	} = await query();
	return SEO({
		title: seo?.title,
		description: seo?.description,
		url: "pl/kontakt",
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
    page: Contact(id: "contact") {
      # Hero
      hero_Heading
      hero_Subheading
      hero_Contact {
        title
        person {
          email
          tel
          slug {
            current
          }
          img {
            asset {
              altText
              url
              metadata {
                lqip
                dimensions {
                  height
                  width
                }
              }
            }
          }
        }
      }
      # Contact
      contact_Email
      contact_Tel
      contact_Address
      contact_Img {
        asset {
          altText
          url
          metadata {
            lqip
            dimensions {
              height
              width
            }
          }
        }
      }
      # Pricing
      pricing_Paragraph
      pricing_Paragraph2
      pricing_Cta {
        theme
        text
        href
      }
      # Help Desk
      helpDesk_Heading
      helpDesk_Subheading
      helpDesk_Paragraph
      helpDesk_FormTitle
      # Seo
      seo {
        title
        description
      }
    }
  }
  `);
	return data;
};
