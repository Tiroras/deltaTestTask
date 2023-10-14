"use client";
import React from "react";
import styled from "styled-components";
import { Button } from "@/components/shared/Button";
import { FilterCheckbox } from "./FilterCheckbox";
import { colors } from "@/styles/variables";

const ListWrapper = styled.div`
  background-color: ${colors.black4};
  width: ${({ desktop }) => (desktop ? "220px" : "100%")};
  z-index: 1;
  border-radius: 5px;
  ${({ desktop }) => (desktop ? "position: absolute;" : "")}
`;

const Title = styled.div`
  padding: 10px;
  text-align: center;
  background-color: ${colors.black3};
  border-radius: 5px 5px 0px 0px;
`;

const List = styled.div`
  max-height: 235px;
  overflow-y: scroll;
  padding: 20px;
  width: ${({ desktop }) => (desktop ? "220px" : "100%")};
`;

const StyledButton = styled(Button)`
  border-radius: 0 0 5px 5px;
  width: 100%;
`;

export const FilterList = ({
  isDesktop = false,
  platforms,
  selectedPlatforms,
  handleCheck,
  handleClose,
}) => {
  return (
    <ListWrapper desktop={isDesktop}>
      {!isDesktop ? <Title>Platforms</Title> : null}
      <List desktop={isDesktop}>
        {platforms.map((platform) => (
          <FilterCheckbox
            key={platform.id}
            name={platform.name}
            id={platform.id}
            handleCheck={handleCheck}
            checked={selectedPlatforms.includes(platform.id)}
          />
        ))}
      </List>
      {!isDesktop ? (
        <StyledButton onClick={handleClose}>Close</StyledButton>
      ) : null}
    </ListWrapper>
  );
};
