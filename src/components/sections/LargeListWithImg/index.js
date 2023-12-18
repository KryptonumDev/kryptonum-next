"use client";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/markdown";
import { useEffect, useRef } from "react";
import DecorativeHeading from "../../atoms/DecorativeHeading";
import styles from "./styles.module.scss";

const LargeListWithImg = ({ data: { heading, img, list } }) => {
  const wrapperRef = useRef(null);

  const animateItems = () => {
    const items = wrapperRef.current.querySelectorAll(".item");
    items.forEach((item) => {
      const { top } = item.getBoundingClientRect();
      if (top >= window.innerHeight * 0.66) {
        item.classList.add(styles.hide);
      } else {
        item.classList.remove(styles.hide);
      }
    });
  };

  const handleScroll = () => {
    requestAnimationFrame(animateItems);
  };

  useEffect(() => {
    animateItems();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2" decoration={false}>
        {heading}
      </DecorativeHeading>
      {img && <Img data={img} className={styles.img} sizes="100vw" />}
      <div className={styles.wrapper} ref={wrapperRef}>
        {list &&
          list.map(({ title, description }, i) => (
            <div className={`${styles.item} item`} key={i}>
              <Markdown className={styles.title} components={{ p: "h3" }}>
                {title}
              </Markdown>
              <Markdown className={styles.description}>{description}</Markdown>
            </div>
          ))}
      </div>
    </section>
  );
};
export default LargeListWithImg;
