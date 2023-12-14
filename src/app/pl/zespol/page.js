import Attitude from "@/components/sections/Attitude";
import CtaSection from "@/components/sections/CtaSection";
import LatestCuriosityEntries from "@/components/sections/LatestCuriosityEntries";
import SmallCtaSection from "@/components/sections/SmallCtaSection";
import Team from "@/components/sections/Team";
import Hero from "@/components/sections/teamSections/Hero";
import Testimonials from "@/components/sections/teamSections/Testimonials";
import Breadcrumbs from "@/global/Breadcrumbs";
import SEO from "@/global/Seo";
import fetchData from "@/utils/fetchData";

export default async function TeamPage() {
	const {
		page: {
			hero_Heading,
			hero_Paragraph,
			hero_Column,
			decode_Heading,
			decode_Hint,
			decode_List,
			smallCta_Heading,
			smallCta_Cta,
			smallCta_Heading2,
			smallCta_Cta2,
			testimonials_Heading,
			testimonials_List,
			team_Heading,
			team_Paragraph,
			attitude_Heading,
			attitude_Paragraph,
			attitude_Claim,
			attitude_Img,
			ctaSection,
			curiosityEntries_Heading,
		},
	} = await query();

	const breadcrumbs = [
		{
			name: "Zespół",
			link: "/pl/zespol",
		},
	];

	return (
		<>
			<main id="main">
				<Breadcrumbs breadcrumbs={breadcrumbs} />
				<Hero
					data={{
						hero_Heading,
						hero_Paragraph,
						hero_Column,
					}}
				/>
				{/* <Decode data={{
        decode_Heading,
        decode_Hint,
        decode_List,
      }} /> */}
				<SmallCtaSection
					data={{
						smallCta_Heading,
						smallCta_Cta,
						smallCta_Heading2,
						smallCta_Cta2,
					}}
				/>
				<Testimonials
					data={{
						testimonials_Heading,
						testimonials_List,
					}}
				/>
				<Team
					heading={team_Heading}
					paragraph={team_Paragraph}
				/>
				<Attitude
					data={{
						attitude_Heading,
						attitude_Paragraph,
						attitude_Claim,
						attitude_Img,
					}}
				/>
				<CtaSection data={ctaSection} />
				<LatestCuriosityEntries heading={curiosityEntries_Heading} />
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
		url: `/pl/zespol`,
	});
}

const query = async () => {
	const {
		body: { data },
	} = await fetchData(`
  query {
    page: Team(id: "team") {
      # Hero
      hero_Heading
      hero_Paragraph
      hero_Column {
        title
        description
      }
      # Decode
      decode_Heading
      decode_Hint
      decode_List {
        title
        description
      }
      # Small CTA Seciton
      smallCta_Heading
      smallCta_Cta {
        theme
        text
        href
      }
      smallCta_Heading2
      smallCta_Cta2 {
        theme
        text
        href
      }
      # Testimonials
      testimonials_Heading
      testimonials_List
      # Team
      team_Heading
      team_Paragraph
      # Attitude
      attitude_Heading
      attitude_Paragraph
      attitude_Claim
      attitude_Img {
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
      # CTA Section
      ctaSection {
        heading
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
      # Curiosity Entries
      curiosityEntries_Heading
      # SEO
      seo {
        title
        description
      }
    }
  }
  `);
	return data;
};
