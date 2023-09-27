'use client'

import styled from "styled-components";
import { Clamp } from "@/utils/functions";

const Wrapper = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: ${Clamp(16, 22, 20)};
`;

export default Wrapper;