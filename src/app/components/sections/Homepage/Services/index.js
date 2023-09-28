import React from "react";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import { ArrowTopRight } from "@/app/components/atoms/Icons";
import { changeImagesDimensions } from "@/utils/functions";
import Link from "next/link";
import Img from "@/utils/Img";
import styles from "./styles.module.scss";

const Services = ({
  data: {
    services_Heading,
    services_List,
    webDevelopment,
    workshop,
    agency,
    graphicsAndDesign,
  }
  
}) => {
  let images = [webDevelopment.hero_Img, workshop.hero_Img, agency.hero_Img, graphicsAndDesign.hero_Img];
  images = changeImagesDimensions(images, 200, 200);
  return (
    <section className={styles.section}>
      <DecorativeHeading type="h2">{services_Heading}</DecorativeHeading>
      <div className={styles.wrapper}>
        {services_List.map((service, i) => (
          <Link href={service.href} className={styles.item} key={i}>
            <Img data={images[i]} className={styles.img}
            />
            <h3>
              <span>{service.title}</span>
              <ArrowTopRight />
            </h3>
            <p className="strong">{service.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Services;