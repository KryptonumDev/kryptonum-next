import * as React from "react";
//import { SEO } from "../components/global/Seo";
import Hero from "../app/components/sections/Homepage/Hero";
import Services from "../app/components/sections/Homepage/Services";
import FourGrid from "../app/components/sections/Homepage/FourGrid";
import Creativity from "./components/sections/Homepage/Creativity";
// import Roadmap from "../components/sections/Homepage/Roadmap";
// import Team from "../components/sections/Homepage/Team";
// import Testimonials from "../components/sections/Homepage/Testimonials";

// import LatestBlogEntries from "../components/sections/Homepage/LatestBlogEntries";
import "../styles/global.css";
import fetchData from "../utils/fetchData";

const IndexPage = async () => {
  const {
    page: {
      hero_Heading,
      hero_Subheading,
      hero_Cta,
      services_Heading,
      services_List,
      conquest_Heading,
      conquest_Claim,
      conquest_Paragraph,
      conquest_SecondClaim,
      conquest_Cta,
      challenge_Heading,
      challenge_Claim,
      challenge_Paragraph,
      challenge_SecondClaim,
      challenge_Cta,
      creativity_Heading,
      creativity_Paragraph,
      creativity_SecondParagraph,
    },
    webDevelopment,
    workshop,
    agency,
    graphicsAndDesign,
  } = await query();
  return (
    <>
      <Hero
        data={{
          hero_Heading,
          hero_Subheading,
          hero_Cta,
        }}
      />
      <Services
        data={{
          services_Heading,
          services_List,
          webDevelopment,
          workshop,
          agency,
          graphicsAndDesign,
        }}
      />
      <FourGrid
        heading={conquest_Heading}
        claim={conquest_Claim}
        paragraph={conquest_Paragraph}
        secondClaim={conquest_SecondClaim}
        cta={conquest_Cta}
      />
      <FourGrid
        heading={challenge_Heading}
        claim={challenge_Claim}
        paragraph={challenge_Paragraph}
        secondClaim={challenge_SecondClaim}
        cta={challenge_Cta}
      />
      <Creativity
        data={{
          creativity_Heading,
          creativity_Paragraph,
          creativity_SecondParagraph,
        }}
      />
    </>
  );
};

const query = async () => {
  const {
    body: { data },
  } = await fetchData(`
  page: Homepage(id: "homepage") {
    # Hero
    hero_Heading
    hero_Subheading
    hero_Cta {
      theme
      text
      href
    }
    # Services
    services_Heading
    services_List {
      title
      description
      href
    }
    # Conquest
    conquest_Heading
    conquest_Claim
    conquest_Paragraph
    conquest_SecondClaim
    conquest_Cta {
      theme
      text
      href
    }
    # Challange
    challenge_Heading
    challenge_Claim
    challenge_Paragraph
    challenge_SecondClaim
    challenge_Cta {
      theme
      text
      href
    }
    # Creativity
    creativity_Heading
    creativity_Paragraph
    creativity_SecondParagraph
  }
  webDevelopment: WebDevelopment(id: "webDevelopment") {
    hero_Img {
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
  workshop: Workshop(id: "workshop") {
    hero_Img {
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
  agency: Agency(id:"agency") {
    hero_Img {
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
  graphicsAndDesign: GraphicsDesign(id:"graphics-design") {
    hero_Img {
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

export default IndexPage;
