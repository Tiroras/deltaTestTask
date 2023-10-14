"use client";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
`;

export default function Loading() {
  return <Wrapper>Loading...</Wrapper>;
}
