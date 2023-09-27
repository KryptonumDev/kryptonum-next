'use client'

import styled from "styled-components";
import { Clamp } from "@/utils/functions";

const Wrapper = styled.section`
  h2 {
    max-width: ${686/16}rem;
    margin-bottom: ${Clamp(28, 48, 72)};
  }
  .cta {
    display: flex;
    width: fit-content;
    margin: 32px auto 0;
  }
`;

export default Wrapper;