import React from "react";
import ReactMarkdown from "react-markdown";
import Wrapper from "./Wrapper";
import { Quote } from "../../atoms/Icons";
import Button from "../../atoms/Button";
import Img from "@/utils/Img";

const TestimonialsSwiper = ({ data }) => {
  return (
    <Wrapper>
      {data.testimonials.map((testimonial, i) => (
        <div className={`item ${testimonial.img ? "" : "noImg"}`} key={i}>
          {testimonial.img && (
            <div>
              <Img
                data={testimonial.img}
                alt={testimonial.img.asset.altText || ""}
                className="img"
              />
              </div>
          )}
          <div className="content">
            <Quote />
            <ReactMarkdown>{testimonial.text}</ReactMarkdown>
          </div>
          <div className="info">
            <h3>
              {testimonial.name}
              <span>{testimonial.project}</span>
            </h3>
            <Button theme={testimonial.cta.theme} to={testimonial.cta.href}>
              {testimonial.cta.text}
            </Button>
          </div>
        </div>
      ))}
    </Wrapper>
  );
};
export default TestimonialsSwiper;
