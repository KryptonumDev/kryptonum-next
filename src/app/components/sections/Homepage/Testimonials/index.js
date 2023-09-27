import React from "react";
import Wrapper from "./Wrapper";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import fetchData from "@/utils/fetchData";
import TestimonialsSwiper from "@/app/components/organisms/TestimonialsSwiper";

const Testimonials = async () => {
  const data = await query();

  return (
    <Wrapper>
      <DecorativeHeading type="h2">Zobacz, co mówią **klienci**:</DecorativeHeading>
      <TestimonialsSwiper data={data} />
    </Wrapper>
  );
}

const query = async () => {
  const {
    body: {data}, 
  } = await fetchData(`
  testimonials: allTestimonials(limit: 3, sort: {_createdAt:ASC}) {
    name
    project
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
}
 
export default Testimonials;