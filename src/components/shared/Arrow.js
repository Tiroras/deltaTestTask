"use client";
import React from "react";
import styled from "styled-components";

const StyledSvg = styled.svg`
  line-height: 0;
  margin: 0 5px;
  position: absolute;
  transition: 300ms;
  ${({ rotated, angle }) => rotated && `transform: rotate(${angle}deg);`}
`;

export const Arrow = ({
  width = 16,
  height = 16,
  isRotated = false,
  rotateAngle = 180,
}) => (
  <StyledSvg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    rotated={isRotated}
    angle={rotateAngle}
    viewBox="0 0 24 24"
  >
    <polygon
      fill="#FFF"
      points="12 17.414 3.293 8.707 4.707 7.293 12 14.586 19.293 7.293 20.707 8.707 12 17.414"
    />
  </StyledSvg>
);
