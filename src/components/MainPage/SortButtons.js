"use client";
import React from "react";
import styled from "styled-components";
import { Button } from "@/components/shared/Button";
import { Arrow } from "@/components/shared/Arrow";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  @media (min-width: 420px) {
    width: unset;
    justify-content: unset;
  }
`;

const StyledButton = styled(Button)`
  margin-right: 10px;
  position: relative;
  padding: 10px 30px 10px 20px;
  width: 50%;
  &:last-child {
    margin-right: 0;
  }

  @media (min-width: 420px) {
    width: unset;
    &:last-child {
      margin-right: 10px;
    }
  }
`;

export const SortButtons = ({ ordering, setOrdering }) => {
  const handleRating = (e) => {
    e.preventDefault();
    ordering === "rating" ? setOrdering("-rating") : setOrdering("rating");
  };

  const handleReleaseDate = (e) => {
    e.preventDefault();
    ordering === "released"
      ? setOrdering("-released")
      : setOrdering("released");
  };

  const isRatingOrdering = ordering === "rating" || ordering === "-rating";
  const isReleaseOrdering = ordering === "released" || ordering === "-released";

  return (
    <Wrapper>
      <StyledButton onClick={handleRating}>
        Rating
        {isRatingOrdering ? <Arrow isRotated={ordering === "-rating"} /> : null}
      </StyledButton>
      <StyledButton onClick={handleReleaseDate}>
        Release Date
        {isReleaseOrdering ? (
          <Arrow isRotated={ordering === "-released"} />
        ) : null}
      </StyledButton>
    </Wrapper>
  );
};
