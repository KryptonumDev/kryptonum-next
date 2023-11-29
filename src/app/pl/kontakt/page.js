import Faq from "@/app/components/sections/Faq";
import Team from "@/app/components/sections/Team";
import ContactUs from "@/app/components/sections/contact/ContactUs";
import Helpdesk from "@/app/components/sections/contact/Helpdesk";
import Hero from "@/app/components/sections/contact/Hero";
import Pricing from "@/app/components/sections/contact/Pricing";
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
	return (
		<>
			<Hero data={{
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
		</>
	);
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
