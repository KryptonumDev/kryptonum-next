import DecorativeHeading from "@/components/atoms/DecorativeHeading";
import Img from "@/components/atoms/Img";
import Markdown from "@/components/atoms/Markdown";
import { removeMarkdown } from "@/utils/functions";
import Link from "next/link";
import styles from "./styles.module.scss";
import Item from "./item";

const GridFloatingImg = ({ data: { heading, list } }) => {
  list = list.map(({ title, description, img, href }) => ({
    title,
    description: <Markdown className={styles.description}>{description}</Markdown>,
    img: <Img data={img} className={styles.cover} sizes="320px" />,
    href: <Link href={href} aria-label={removeMarkdown(title)} className={styles.link} />,
  }));

  return (
    <section className={styles.section}>
      <header>
        <DecorativeHeading type="h2" decoration={false}>
          {heading}
        </DecorativeHeading>
      </header>
      <div className={styles.wrapper}>
        {list.map((item, i) => (
          <Item
            {...item}
            Arrow={Arrow}
            key={i}
          />
        ))}
      </div>
    </section>
  );
};

export default GridFloatingImg;

const Arrow = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    stroke="url(#paint0_linear_7869_9975)"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 34l20-20m0 0H14m20 0v20"></path>
    <defs>
      <linearGradient
        id="paint0_linear_7869_9975"
        x1="33.625"
        x2="12.811"
        y1="14"
        y2="15.326"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2DD282"></stop>
        <stop offset="1" stopColor="#90F4E8"></stop>
      </linearGradient>
    </defs>
  </svg>
);