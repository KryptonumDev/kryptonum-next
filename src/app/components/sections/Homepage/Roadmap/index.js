'use client'

import React, { useState, useEffect, useRef } from "react";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import Button from "@/app/components/atoms/Button";
import Wrapper from './Wrapper';


const Roadmap = ({ heading, list, cta }) => {
  const roadmapRef = useRef();
  const [scrollable, setScrollable] = useState(0);
  useEffect(() => {
    const roadmap = roadmapRef.current;
    const container = roadmap.querySelector(".roadmap");
    const items = container.querySelectorAll(".roadmap-item");
    const anim = () => {
      var scrollableWidth = container.scrollWidth - container.clientWidth;
      setScrollable(scrollableWidth);

      const { top } = roadmap.getBoundingClientRect();
      const topPositive = Math.abs(top);
      items.forEach((item) => {
        item.getBoundingClientRect().left <= window.innerWidth / 2.5
          ? item.classList.add("active")
          : item.classList.remove("active");
      });
      if (topPositive >= scrollableWidth) {
        container.scrollTo({ left: scrollableWidth });
      } else if (top <= 0) {
        container.scrollTo({ left: topPositive });
      } else {
        container.scrollTo({ left: 0 });
      }
    };
    anim();
    window.addEventListener("resize", anim);
    window.addEventListener("scroll", anim);
  }, []);

  return (
    <Wrapper
      style={{ minHeight: `calc(100vh + ${scrollable}px` }}
      className="roadmapWrapper"
      ref={roadmapRef}
    >
      <div className="sticky">
        <DecorativeHeading type="h2">{heading}</DecorativeHeading>
        <div className="line"></div>
        <div className="roadmap">
          {list.map((item, i) => (
            <div className="roadmap-item" key={i}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              {i + 1 === list.length && cta?.text && (
                <Button to={cta.href} theme={cta.theme}>
                  {cta.text}
                </Button>
              )}
            </div>
          ))}
          <div className="roadmap-item"></div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Roadmap;
