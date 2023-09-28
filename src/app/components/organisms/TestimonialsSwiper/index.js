import React from "react";
import ReactMarkdown from "react-markdown";
import { Quote } from "../../atoms/Icons";
import Button from "../../atoms/Button";
import Img from "@/utils/Img";
import styles from './styles.module.scss';

const TestimonialsSwiper = ({ data }) => {
  return (
    <div>
      {data.testimonials.map((testimonial, i) => (
        <div className={`${styles.item}`} key={i}>
          {testimonial.img && (
            <div>
              <Img
                data={testimonial.img}
                alt={testimonial.img.asset.altText || ""}
                className={styles.img}
              />
              </div>
          )}
          <div className={styles.content}>
            <Quote />
            <ReactMarkdown>{testimonial.text}</ReactMarkdown>
          </div>
          <div className={`${styles.info}`}>
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
    </div>
  );
};
export default TestimonialsSwiper;
