"use client";
import React, { useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import { Arrow } from "../shared/Arrow";
import { colors } from "@/styles/variables";

const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 400px;
  object-fit: contain;
  background-color: ${colors.black4};
`;

const Button = styled.div`
  position: absolute;
  cursor: pointer;
  height: 50px;
  width: 50px;
  border: 1px solid ${colors.grey};
  background-color: ${colors.black3};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 170px;
`;

const LeftButton = styled(Button)`
  left: 10px;
`;

const RightButton = styled(Button)`
  right: 10px;
`;

export const GameGallery = ({ screenshots }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleLeft = (index) => {
    index < 0
      ? setSelectedIndex(screenshots.length - 1)
      : setSelectedIndex(index);
  };

  const handleRight = (index) => {
    index === screenshots.length
      ? setSelectedIndex(0)
      : setSelectedIndex(index);
  };

  return screenshots[selectedIndex]?.image ? (
    <Wrapper>
      <LeftButton onClick={() => handleLeft(selectedIndex - 1)}>
        <Arrow isRotated rotateAngle={90} />
      </LeftButton>
      <StyledImage
        width={400}
        height={300}
        src={screenshots[selectedIndex].image}
        alt="Game screenshot"
      />
      <RightButton onClick={() => handleRight(selectedIndex + 1)}>
        <Arrow isRotated rotateAngle={-90} />
      </RightButton>
    </Wrapper>
  ) : null;
};
