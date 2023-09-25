import * as React from "react";
//import { SEO } from "../components/global/Seo";
import Hero from "../app/components/sections/Homepage/Hero";
// import Services from "../components/sections/Homepage/Services";
// import Creativity from "../components/sections/Homepage/Creativity";
// import Roadmap from "../components/sections/Homepage/Roadmap";
// import Team from "../components/sections/Homepage/Team";
// import Testimonials from "../components/sections/Homepage/Testimonials";
// import FourGrid from "../components/sections/Homepage/FourGrid";
// import LatestBlogEntries from "../components/sections/Homepage/LatestBlogEntries";
import fetchData from "../../utils/fetchData";

const IndexPage = async () => {
  const {
    page: { hero_Heading, hero_Subheading, hero_Cta },
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
    </>
  );
};

const query = async () => {
  const {
    body: { data },
  } = await fetchData(`
  page: Homepage(id:"homepage") {
    # Hero
    hero_Heading
    hero_Subheading
    hero_Cta {
      theme
      text
      href
    }
    hero_Subheading
  }
  `);
  return data;
};

export default IndexPage;
