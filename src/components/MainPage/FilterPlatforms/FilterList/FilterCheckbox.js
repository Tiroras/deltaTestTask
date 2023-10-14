"use client";
import { colors } from "@/styles/variables";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 5px 0;
`;

const Label = styled.label`
  color: ${colors.white};
  font-size: 18px;
`;

const Checkbox = styled.input`
  margin-right: 10px;
`;

export const FilterCheckbox = ({ name, id, checked, handleCheck }) => {
  return (
    <Wrapper>
      <Label>
        <Checkbox
          checked={checked}
          type="checkbox"
          onChange={() => handleCheck(id)}
        />
        <span>{name}</span>
      </Label>
    </Wrapper>
  );
};
