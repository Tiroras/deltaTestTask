"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { variables } from "@/styles/variables";
import { Button } from "@/components/shared/Button.js";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 20px 20px;
  max-width: ${variables.maxContentWidth};
  margin: 0 auto;
`;

const Input = styled.input`
  border: 0;
  width: 80%;
  padding: 10px;
  border-radius: 5px 0 0 5px;
`;

const StyledButton = styled(Button)`
  width: 20%;
  border-radius: 0 5px 5px 0;
  padding: 10px 0;
`;

export const Search = ({ setSearch, setPlatforms }) => {
  const [value, setValue] = useState("");

  const handleValue = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
    setPlatforms();
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setSearch(value);
    }
  };

  return (
    <Wrapper>
      <Input
        type="text"
        placeholder="Input game name"
        value={value}
        onChange={handleValue}
        onKeyDown={handleEnter}
      />
      <StyledButton onClick={handleSubmit}>Search</StyledButton>
    </Wrapper>
  );
};
