"use client"
import { Clamp } from "../../../../../utils/functions";
import styled from "styled-components";
import React from 'react';

const Wrapper = styled.section`
  header {
    display: grid;
    align-items: flex-end;
    grid-template-columns: auto auto;
    margin-bottom: 172px;
    .copy {
      max-width: ${740/16}rem;
      h1 {
        margin-bottom: ${Clamp(28, 40, 72, "px")};
      }
      ol {
        margin-left: calc(${Clamp(24, 40, 48, "px")} + 8px);
        counter-reset: counter;
        li {
          counter-increment: counter;
          list-style-type: none;
          font-size: ${Clamp(20, 32, 28)};
          display: grid;
          grid-template-columns: 32px auto;
          column-gap: ${Clamp(12, 16, 32, "px")};
          align-items: baseline;
          &:not(:last-child){
            margin-bottom: .5rem;
          }
          &::before {
            content: "/0" counter(counter);
            display: inline-block;
            font-size: 1rem;
          }
        }
      }
    }
    .cta-wrapper {
      align-items: flex-end;
    }
  }
  @media (max-width: 1189px){
    header {
      margin-bottom: ${Clamp(96, 144, 144, "px")};
      grid-template-columns: 1fr;
      .cta-wrapper {
        margin-top: ${Clamp(64, 96, 96, "px")};
        margin-left: calc(${Clamp(24, 40, 48, "px")} + 8px);
        align-items: flex-start;
        flex-direction: column-reverse;
      }
    }
  }
  @media (max-width: 499px){
    header {
      .copy {
        ol {
          margin-left: 0;
        }
      }
      .cta-wrapper {
        margin-left: 0;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`
export default Wrapper;