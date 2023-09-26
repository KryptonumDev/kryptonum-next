'use client'
import React from "react";
import styled from "styled-components";
import { Clamp } from "@/utils/functions";


const Wrapper = styled.h1`
  display: grid;
  grid-template-columns: auto 1fr;
  width: fit-content;
  > svg {
    width: 0.86em;
    height: 0.86em;
    margin-top: 0.25em;
    margin-right: 8px;
  }
  ${({ $has2spans }) => $has2spans && `
    grid-template-columns: auto auto 1fr;
    width: 100%;
    span:nth-of-type(1){
      max-width: ${640/16}rem;
    }
    span:nth-of-type(2){
      grid-column: 3/-1;
      align-self: flex-end;
      text-align: right;
      font-size: ${Clamp(20, 22, 22)};
      margin: 0 0 .8em 0;
      max-width: ${400/16}rem;
      justify-self: end;
    }
    @media (max-width: 1199px){
      grid-template-columns: auto 1fr;
      span:nth-of-type(2) {
        grid-column: 3/1;
        text-align: left;
        margin: 28px 0 0 0;
        justify-self: unset;
        max-width: unset;
      }
    }
  `}
  span > svg {
    vertical-align: middle;
    width: ${Clamp(100, 216, 216)};
  }
`;

export default Wrapper;