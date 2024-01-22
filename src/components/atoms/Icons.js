import React from "react";

export const HeadingDecoration = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
  >
    <path
      fill="currentColor"
      d="M22.161 22.73c.146.293 0 .439-.424.439a9.19 9.19 0 01-1.738-.213c-2.295-.862-3.98-1.591-5.173-2.162a20.774 20.774 0 01-2.375 4.311 57.127 57.127 0 00-3.223 5.611 10.732 10.732 0 00-1.326 4.736 4.762 4.762 0 001.512 3.462 4.51 4.51 0 003.236 1.499 3.793 3.793 0 001.725-.424 1.553 1.553 0 001.074-.65c.194-.175.413-.318.65-.425a1.857 1.857 0 011.327.637 1.978 1.978 0 01.438 1.724C17.717 42.283 17 42.867 15.7 43a8.994 8.994 0 01-6.247-2.361 8.398 8.398 0 01-3.662-6.912 11.21 11.21 0 012.8-6.46h-.438a3.037 3.037 0 01-3.237-3.024 5.545 5.545 0 011.512-4.099 5.598 5.598 0 014.311-1.326c1.327.146 2.308.291 3.025.424a10.73 10.73 0 001.326-4.735 6.14 6.14 0 00-.862-3.45 2.904 2.904 0 00-2.653-1.326 3.25 3.25 0 00-2.587 1.327 1.088 1.088 0 01-1.326.424A4.83 4.83 0 015.5 10.62a3.781 3.781 0 01-1.075-1.937A3.529 3.529 0 015.5 6.097a3.98 3.98 0 013.024-1.088 7.547 7.547 0 015.386 3.237 9.882 9.882 0 012.374 6.897 12.097 12.097 0 01-1.075 4.537 36.204 36.204 0 016.951 3.05zm-8.834-2.586a13.175 13.175 0 00-2.374-.212 4.086 4.086 0 00-3.025 1.074 3.143 3.143 0 00-1.074 2.163c0 1.154.504 1.724 1.512 1.724 1.432.15 2.87-1.07 4.311-3.661a1.327 1.327 0 00.65-1.088zm10.612 3.025c-3.007-1.583-4.66-3.595-4.961-6.036a7.534 7.534 0 011.512-5.173 7.708 7.708 0 016.473-2.375c3.537.425 6.34 3.153 8.41 8.185 1.141 3.175 2.507 4.757 4.099 4.749a2.494 2.494 0 002.653-1.075 3.74 3.74 0 00.862-2.374 3.582 3.582 0 00-1.724-3.237 4.085 4.085 0 00-2.587-.862.624.624 0 01-.438.212.57.57 0 01-.424-.212 4.39 4.39 0 01-.876-1.725 2.123 2.123 0 01.65-1.512 2.654 2.654 0 012.375-.636 4.245 4.245 0 013.024 2.586 14.035 14.035 0 011.327 7.96 16.052 16.052 0 01-5.598 10.996 17.244 17.244 0 01-11.222 4.31 9.935 9.935 0 01-7.548-2.374 7.322 7.322 0 01-2.374-5.173c0-3.157 2.082-4.961 6.26-5.386l.107-.848z"
    ></path>
  </svg>
);

export const HeadingLineFlexibility = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="217"
    height="32"
    fill="none"
    viewBox="0 0 217 32"
  >
    <path
      fill="url(#HeadingLineFlexibility)"
      d="M46.595 2.62l.236-.972-.236.972zm96.075 21.65l.428.904-.428-.904zM217 8.28L208.452.517 206.003 11.8 217 8.28zM1.891 16.414c.665-1.305 2.404-3.112 5.115-5.028 2.678-1.893 6.203-3.819 10.3-5.403 8.203-3.17 18.611-4.931 29.052-2.392l.473-1.943c-10.94-2.66-21.773-.804-30.246 2.47-4.24 1.638-7.91 3.64-10.733 5.634C3.064 11.722 1 13.76.11 15.507l1.782.907zM46.36 3.591c6.52 1.586 12.899 5.03 19.583 9.047 6.646 3.994 13.608 8.565 21.144 12.24 7.56 3.687 15.768 6.512 25.003 7.031 9.242.52 19.452-1.272 31.009-6.735l-.855-1.808c-11.284 5.334-21.163 7.046-30.042 6.547-8.886-.5-16.83-3.22-24.238-6.832-7.432-3.624-14.254-8.109-20.99-12.157-6.697-4.025-13.3-7.612-20.142-9.276l-.473 1.943zm96.739 21.583c30.417-14.377 41.658-21.832 64.933-17.818l.34-1.971c-24.038-4.146-35.939 3.711-66.128 17.981l.855 1.808z"
    ></path>
    <defs>
      <linearGradient
        id="HeadingLineFlexibility"
        x1="212.95"
        x2="27.303"
        y1="1.378"
        y2="87.617"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#2DD282"></stop>
        <stop
          offset="1"
          stopColor="#90F4E8"
        ></stop>
      </linearGradient>
    </defs>
  </svg>
);

export const ArrowRight = () => {
  const id = React.useId();
  const arrowRid = `arrowR_${id}`;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M3.33594 10H16.6693M16.6693 10L11.6693 5M16.6693 10L11.6693 15"
        stroke={`url(#${arrowRid})`}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id={arrowRid}
          x1="16.4193"
          y1="5"
          x2="2.58645"
          y2="6.17476"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2DD282" />
          <stop
            offset="1"
            stopColor="#90F4E8"
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const ScrollDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="41"
    fill="none"
    viewBox="0 0 40 41"
  >
    <path
      stroke="#EFF0F3"
      strokeLinecap="round"
      strokeWidth="2"
      d="M20 23.015v5M6.98 14.805c0-6.75 5.97-12.223 13.333-12.223 7.364 0 13.333 5.472 13.333 12.222v12.222c0 6.75-5.97 12.223-13.333 12.223-7.364 0-13.333-5.472-13.333-12.223V14.804z"
    ></path>
  </svg>
);

export const Star = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 25 25"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12.375 2.995l3.09 6.26 6.91 1.01-5 4.87 1.18 6.88-6.18-3.25-6.18 3.25 1.18-6.88-5-4.87 6.91-1.01 3.09-6.26z"
    ></path>
  </svg>
);

export const Desktop = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    fill="none"
    viewBox="0 0 33 33"
  >
    <path
      stroke="#EFF0F3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20.376 28.995h-8M5.71 23.662a2.667 2.667 0 01-2.667-2.667V7.662A2.667 2.667 0 015.71 4.995h21.333a2.667 2.667 0 012.667 2.667v13.333a2.667 2.667 0 01-2.667 2.667H5.71z"
    ></path>
  </svg>
);

export const Error = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="65"
    height="64"
    fill="none"
    viewBox="0 0 65 64"
  >
    <path
      stroke="#EE6470"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M32.425 42.667h.026m-.026-21.334V32M21.385 5.334h22.08L59.09 20.96v22.08L43.464 58.667h-22.08L5.758 43.04V20.96L21.385 5.333z"
    ></path>
  </svg>
);

export const SmallError = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
  >
    <path
      stroke="#EE6470"
      strokeLinecap="round"
      strokeWidth="2"
      d="M12.55 16h.01m-.01-8v4M8.41 2h8.28l5.86 5.86v8.28L16.69 22H8.41l-5.86-5.86V7.86L8.41 2z"
    ></path>
  </svg>
);

export const Prev = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="25"
    height="24"
    fill="none"
    viewBox="0 0 25 24"
  >
    <path
      stroke="#EFF0F3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M15.725 18l-6-6 6-6"
    ></path>
  </svg>
);

export const Share = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="32"
    fill="none"
    viewBox="0 0 33 32"
  >
    <path
      stroke="#EFF0F3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11.879 18.013l9.106 5.307m-.013-14.64l-9.093 5.306m16.546 11.347a4 4 0 11-8 0 4 4 0 018 0zm-16-9.333a4 4 0 11-8 0 4 4 0 018 0zm16-9.334a4 4 0 11-8 0 4 4 0 018 0z"
    ></path>
  </svg>
);