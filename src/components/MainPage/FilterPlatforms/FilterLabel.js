"use client";
import React from "react";
import { Arrow } from "@/components/shared/Arrow";
import styled from "styled-components";
import { colors } from "@/styles/variables";

const Wrapper = styled.div`
  cursor: pointer;
  background-color: ${colors.black3};
  padding: 10px 20px;
  border-radius: ${({ open }) => (open ? "5px 5px 0 0" : "5px")};
  position: relative;
  text-align: center;
  &:hover {
    background-color: ${colors.black4};
  }
`;

const CountWrapper = styled.div`
  display: inline-block;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  background-color: ${colors.white};
  color: ${colors.black3};
  text-align: center;
  font-size: 10px;
  position: relative;
  bottom: 5px;
`;

const Count = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FilterLabel = ({ openList, count, setOpenList }) => (
  <Wrapper open={openList} onClick={() => setOpenList(!openList)}>
    <span>Platforms</span>
    {count ? (
      <CountWrapper>
        <Count>{count}</Count>
      </CountWrapper>
    ) : null}
    <Arrow isRotated={openList} />
  </Wrapper>
);
