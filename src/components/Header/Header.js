"use client";
import React from "react";
import styled from "styled-components";
import { colors } from "@/styles/variables";
import Link from "next/link";
import { Logo } from "./Logo";

const StyledHeader = styled.header`
  background-color: ${colors.black3};
  color: ${colors.white};
  height: 48px;
  max-height: 5vh;
  padding: 5px 30px;
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 200px;
`;

const Title = styled.h1`
  margin: 0 10px;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink href="/">
        <Logo fill={colors.white} height={30} width={30} />
        <Title>Game BD</Title>
      </StyledLink>
    </StyledHeader>
  );
};
