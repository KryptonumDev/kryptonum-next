import styled from "styled-components";
import { Clamp } from "@/utils/functions";

const Wrapper = styled.section`
  margin: ${Clamp(-172, -144, -96, "px")} 0;
  .sticky {
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .line {
      height: 1px;
      background-color: var(--neutral-800);
      margin: 0 calc(var(--pageMargin) * -1);
    }
  }
  h2 {
    margin-bottom: ${Clamp(28, 64, 42, "px")};
    max-width: ${734 / 16}rem;
  }
  .roadmap {
    width: 100vw;
    max-width: calc(1680px + (var(--pageMargin) * 2));
    pointer-events: none;
    ::-webkit-scrollbar {
      display: none;
    }
    display: flex;
    column-gap: 32px;
    overflow-x: auto;
    margin: 0 calc(var(--pageMargin) * -1);
    padding: 0 var(--pageMargin);
    counter-reset: counter;
    margin-top: -12px;
    padding-bottom: 1rem;
    .roadmap-item {
      flex-shrink: 0;
      width: calc(100% / 2.1);
      position: relative;
      padding-top: 2rem;
      padding-right: 1rem;
      counter-increment: counter;
      &:not(:last-child) {
        &::before,
        &::after {
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
        &::before {
          background: linear-gradient(var(--neutral-950), var(--neutral-950))
              padding-box,
            var(--gradient) border-box;
          border: 1px solid transparent;
        }
        &::after {
          background: var(--gradient);
          transform: scale(0);
          transition: transform 0.3s var(--easing);
        }
        &.active::after {
          transform: scale(1);
        }
      }
      &:last-child {
        width: calc(100% - (100% / 2.1) - 32px);
      }
      h3 {
        font-size: ${Clamp(20, 32, 30)};
        margin-bottom: ${Clamp(8, 16, 16, "px")};
        display: grid;
        grid-template-columns: 40px 1fr;
        gap: ${Clamp(8, 16, 16, "px")};
        align-items: center;
        &::before {
          content: "/" counter(counter);
          display: inline-block;
          font-size: 1rem;
          margin-top: 0.2em;
        }
      }
      &:nth-child(-n + 9) h3::before {
        content: "/0" counter(counter);
      }
      p {
        padding-left: ${Clamp(8 + 40, 16 + 40, 16 + 40, "px")};
        font-size: ${Clamp(16, 22, 22)};
      }
      .cta {
        margin-top: 2rem;
        margin-left: ${Clamp(8 + 40, 16 + 40, 16 + 40, "px")};
        pointer-events: auto;
      }
    }
  }
  @media (max-width: 1099px) {
    .roadmap {
      .roadmap-item {
        width: calc(100% / 1.1);
        &:last-child {
          width: calc(100% - (100% / 1.1) - 32px);
        }
      }
    }
  }
  @media (max-width: 499px) {
    .roadmap {
      .roadmap-item {
        padding-right: 0;
        width: 100%;
        &:last-child {
          display: none;
        }
        .cta {
          margin-left: 0;
          width: 100%;
        }
      }
    }
  }
`;

export default Wrapper;
