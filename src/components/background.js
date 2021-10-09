import React from 'react'
import "./SCSS/background.scss"

const background = () => {
  return (
    <div className="background">
      <svg
        width="1920"
        height="1080"
        viewBox="0 0 1920 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <rect width="1920" height="1080" fill="#18181B" />
          <path
            d="M1723 -51.5835L-384.11 715.342L-496 407.925L1611.11 -359L1723 -51.5835Z"
            fill="#4F46E5"
            fill-opacity="0.07"
          />
          <g filter="url(#filter0_d)">
            <path
              d="M-48 1079.93L2059.11 313L2171 620.417L63.8905 1387.34L-48 1079.93Z"
              fill="#4F46E5"
              fill-opacity="0.07"
              shape-rendering="crispEdges"
            />
          </g>
        </g>
        <defs>
          <filter
            id="filter0_d"
            x="-52"
            y="313"
            width="2227"
            height="1082.34"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dy="4" />
            <feGaussianBlur stdDeviation="2" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
          <clipPath id="clip0">
            <rect width="1920" height="1080" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

export default background
