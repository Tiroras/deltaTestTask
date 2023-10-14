"use client";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 40px;
  height: 65vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NoGames = () => <Wrapper>No games found</Wrapper>;
