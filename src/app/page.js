import * as React from "react";
//import { SEO } from "../components/global/Seo";
import Hero from "../app/components/sections/Homepage/Hero";
import Services from "../app/components/sections/Homepage/Services";
// import Creativity from "../components/sections/Homepage/Creativity";
// import Roadmap from "../components/sections/Homepage/Roadmap";
// import Team from "../components/sections/Homepage/Team";
// import Testimonials from "../components/sections/Homepage/Testimonials";
// import FourGrid from "../components/sections/Homepage/FourGrid";
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
    #Services
    services_Heading
    services_List {
      title
      description
      href
    }
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
