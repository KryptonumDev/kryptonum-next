'use client'

import { Clamp } from "@/utils/functions";
import styled from "styled-components";

const Wrapper = styled.section`
  h2 {
    margin-bottom: ${Clamp(28, 64, 64, "px")};
  }
`

export default Wrapper;