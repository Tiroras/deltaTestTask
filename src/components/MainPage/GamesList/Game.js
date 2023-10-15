"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { colors } from "@/styles/variables";
import { StyledImage } from "@/components/shared/StyledImage";

const Wrapper = styled(Link)`
  display: block;
  background-color: ${colors.black3};
  margin-bottom: 20px;
  border-radius: 5px;
  transition: 200ms;
  &:last-child {
    margin-bottom: 0px;
  }
  &:hover {
    box-shadow: 1px 1px 10px 1px ${colors.grey};
  }
`;

const Title = styled.div`
  padding: 15px;
  font-weight: bold;
  font-size: 18px;
`;

const Info = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;

const InfoSpan = styled.span`
  color: ${colors.grey};
`;

export const Game = ({ game }) => {
  console.log("game");
  const formatDate = (date) =>
    date ? date.split("-").reverse().join(".") : "N/A";
  return (
    <Wrapper href={`/game/${game.slug}`}>
      <Title>{game.name}</Title>
      <div>
        {game.background_image ? (
          <StyledImage
            width={400}
            height={300}
            src={game.background_image}
            alt={`${game.name} poster`}
          />
        ) : null}
      </div>
      <Info>
        <div>
          <InfoSpan>released: </InfoSpan>
          {formatDate(game.released)}
        </div>
        <div>
          <InfoSpan>rating: </InfoSpan>
          {game.rating}
        </div>
      </Info>
    </Wrapper>
  );
};
