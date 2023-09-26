"use client"

import styled from "styled-components";
import { Clamp } from "@/utils/functions";

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  h2 {
    grid-column: 1 / 3;
    margin-bottom: ${Clamp(28, 48, 48, "px")}
  }
  p {
    font-size: ${Clamp(20, 22, 30)};
  }
  @media (max-width: 699px){
    grid-template-columns: 1fr;
    h2 {
      grid-column: unset;
    }
    p:first-of-type {
      margin-bottom: 1rem;
    }
  }
`;

export default Wrapper;