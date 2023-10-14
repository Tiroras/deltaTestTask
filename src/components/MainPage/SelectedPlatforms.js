"use client";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 700px;
  margin: 10px auto;
  padding: 0 20px;
  visibility: ${({ visible }) => (visible ? "visible" : "hidden")};
`;

export const SelectedPlatforms = ({ platforms, selectedPlatforms }) => {
  const filteredPlatforms = platforms.filter((platform) =>
    selectedPlatforms.includes(platform.id),
  );
  return (
    <Wrapper visible={selectedPlatforms.length}>
      <span>Platforms: </span>
      {filteredPlatforms.map((platform, i) => (
        <span key={platform.slug}>
          {platform.name}
          {i === filteredPlatforms.length - 1 ? "" : ", "}
        </span>
      ))}
    </Wrapper>
  );
};
