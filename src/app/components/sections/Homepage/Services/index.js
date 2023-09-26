'use client'
import React from "react";
import DecorativeHeading from "@/app/components/atoms/DecorativeHeading";
import { ArrowTopRight } from "@/app/components/atoms/Icons";
import styled from "styled-components";
import { Clamp, changeImageDimensions } from "@/utils/functions";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Img from "@/utils/Img";

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
  images = changeImageDimensions(200, 200, images);
  return (
    <Wrapper>
      <DecorativeHeading type="h2">{services_Heading}</DecorativeHeading>
      <div className="wrapper">
        {services_List.map((service, i) => (
          <Link href={service.href} className="item" key={i}>
            <Img data={images[i]} className="img"
            />
            <h3>
              <span>{service.title}</span>
              <ArrowTopRight />
            </h3>
            <p className="strong">{service.description}</p>
          </Link>
        ))}
      </div>
    </Wrapper>
  );
}

export default Services;