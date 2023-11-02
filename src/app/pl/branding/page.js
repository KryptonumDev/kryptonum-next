'use server'

import Hero from "@/app/components/sections/Hero";
import fetchData from "@/utils/fetchData";

export default async function BraindingPage() {
  const {
		page: { team_Cta, team_Heading, team_Text },
		testimonials,
	} = await query();
  return (
    <>
      <Hero data={heroData}/>
    </>
  )
}


const heroData={
	heading: "Branding **wydobywa znaczenie** marki",
	sideImg: {
		asset: {
			altText: "ASDASDasd",
			url: "/brandingHero.webp",
			metadata: {
				dimensions: {
					height: 1152,
					width: 1929,
				},
			},
		},
	}
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
		page: Homepage(id: "homepage") {
			# Team
			team_Heading
			team_Text
			team_Cta {
				theme
				text
				href
			}
		}
		testimonials: allTestimonials(limit: 3, sort: {_createdAt:ASC}) {
			name
			text
			cta {
				theme
				text
				href
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
		`);
	return data;
};