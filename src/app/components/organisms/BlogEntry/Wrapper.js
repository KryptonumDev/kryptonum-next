'use client'

import styled from "styled-components";
import { Clamp } from "@/utils/functions";

const Wrapper = styled.div`
  border: 1px solid var(--neutral-800);
  border-left: none;
  border-right: none;
  &:not(:last-child) {
    margin-bottom: ${Clamp(24, 32, 32, "px")};
  }
  padding: ${Clamp(16, 24, 32, "px")} 16px;
  display: grid;
  column-gap: 32px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas: "c e . f" ". . d d" "a a b b";
  align-items: flex-start;
  position: relative;
  .img {
    position: absolute;
    left: 50%;
    top: 100%;
    z-index: 2;
    transform: translate(-75%, -50%) rotate(0) scale(.8);
    pointer-events: none;
    opacity: 0;
    object-fit: cover;
    transition: transform .3s, opacity .3s;
  }
  &:hover {
    .img {
      opacity: 1;
      transform: translate(-50%, -50%) rotate(13deg);
    }
  }
  &:nth-child(even):hover {
    .img {
      transform: translate(-50%, -50%) rotate(-13deg);
    }
  }
  .link {
    position: absolute;
    inset: 0;
  }
  a {
    position: relative;
    z-index: 1;
  }
  .title {
    grid-area: a;
    font-size: ${Clamp(20, 32, 30)};
    margin-top: 16px;
  }
  .subtitle {
    margin-top: 16px;
    grid-area: b;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: ${Clamp(16, 22, 22)};
  }
  .author {
    grid-area: c;
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      font-size: ${Clamp(16, 20, 20)};
    }
  }
  .categories {
    grid-area: d;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    a {
      padding: 4px 16px;
      background-color: var(--neutral-900);
    }
  }
  .readingTime {
    grid-area: e;
    justify-self: flex-end;
    height: 48px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 1rem;
  }
  .createdAt {
    grid-area: f;
    justify-self: flex-end;
  }
  &.smallEntry {
    column-gap: 16px;
    padding: ${Clamp(16, 24, 32, "px")} 0;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "c e" "a a" "b b" "d d" "f f";
    .subtitle {
      margin-top: 20px;
      display: block;
    }
    .categories {
      margin: 24px 0;
    }
    .readingTime {
      font-size: 14px;
    }
  }
  @media (max-width: 849px){
    column-gap: 16px;
    padding: ${Clamp(16, 24, 32, "px")} 0;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "c e" "a a" "b b" "d d" "f f";
    .subtitle {
      margin-top: 20px;
      display: block;
    }
    .categories {
      margin: 24px 0;
    }
    .readingTime {
      font-size: 14px;
    }
  }
  @media (max-width: 349px){
    column-gap: 8px;
  }
`

export default Wrapper;