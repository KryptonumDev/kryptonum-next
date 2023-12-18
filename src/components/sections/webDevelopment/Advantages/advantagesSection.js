"use client";

import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const AdvantagesSection = ({ advantages, simpleCtaSection, children }) => {
  const [scales, setScales] = useState({ scale1: 0, scale2: 0, scale3: 0, scale4: 0 });
  useEffect(() => {
    const advantages = document.querySelectorAll(".advantages-item");
    const handleScroll = () => {
      const offset = (window.innerHeight / 2) * -1;
      const newScales = { ...scales };
      advantages.forEach((advantage, i) => {
        const { top, height } = advantage.getBoundingClientRect();
        let scaleX = 0.6 - (Math.abs(top - offset) / (height / 2 + offset * 1.5)) * 0.6;
        if (top - offset >= 0) {
          scaleX = 0.6;
        } else if (Math.abs(top - offset) >= height / 2) {
          scaleX = 0;
        }
        newScales[`scale${i + 1}`] = scaleX;
      });
      setScales(newScales);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
  }, []);

  return (
    <section className={styles.section}>
      <header>{children}</header>
      <div className={styles.advantages}>
        {advantages.map((advantage, i) => (
          <div className={`${styles.advantagesItem} advantages-item`} key={i} data-scale={scales[`scale${i + 1}`]}>
            <div className={styles.copy}>
              <Markdown components={{ p: "h3" }}>{advantage.title}</Markdown>
              <Markdown>{advantage.description}</Markdown>
            </div>
            <div className={i % 2 === 0 ? styles.imageWrapper : `${styles.imageWrapper} ${styles.reverse}`}>
              <Img data={advantage.img} className={styles.img} sizes="100vw" />
              <div className={styles.imgOverlay} style={{ transform: `scaleX(${scales[`scale${i + 1}`]})` }} />
            </div>
          </div>
        ))}
      </div>
      {simpleCtaSection}
    </section>
  );
};
export default AdvantagesSection;
