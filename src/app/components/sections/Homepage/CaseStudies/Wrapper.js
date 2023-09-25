'use client'

import React from 'react';
import { Clamp } from "../../../../../utils/functions";
import styled from "styled-components";


const Wrapper = styled.section`
  h2 {
    margin: 0 auto ${Clamp(28, 72, 72)};
    text-align: left;
  }
  > a {
    margin-top: 48px;
  }
  text-align: center;
  @media (min-width: 500px) {
    .caseStudy {
      overflow: hidden;
      position: sticky;
      top: 0;
      max-height: 100vh;
      max-height: 100dvh;
      .img {
        width: 100%;
        height: 100%;
      }
      .cta {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-image: linear-gradient(
          rgba(0, 0, 0, 0),
          rgba(0, 0, 0, 0.6),
          rgba(0, 0, 0, 0)
        );
        width: 100%;
        padding: 50% 0;
      }
    }
  }
  @media (max-width: 1189px) {
    .caseStudy {
      margin: 0 calc(var(--pageMargin) * -1);
    }
  }
  @media (max-width: 499px) {
    .caseStudy {
      &:not(:last-child) {
        margin-bottom: 48px;
      }
      .cta {
        margin-top: 24px;
      }
    }
  }
`;

export default Wrapper;