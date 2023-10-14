"use client";
import { colors } from "@/styles/variables";
import React from "react";
import styled from "styled-components";

const Content = styled.main`
  background-color: ${colors.black2};
  color: ${colors.white};
  min-height: 95vh;
  height: 100%;
  width: 100vw;
`;

export const ContentLayout = ({ children }) => {
  return <Content>{children}</Content>;
};
