"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import { GameGallery } from "./GameGallery";
import { colors, variables } from "@/styles/variables";
import { StyledImage } from "../shared/StyledImage";
import { Span } from "../shared/Span";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: ${variables.maxContentWidth};
  @media (min-width: 420px) {
    padding: 20px;
  }
`;

const Back = styled.div`
  display: inline-block;
  padding: 10px;
  cursor: pointer;
`;

const Game = styled.div`
  background-color: ${colors.black3};
  @media (min-width: 420px) {
    border-radius: 5px;
  }
`;

const Padding = styled.div`
  padding: 15px;
`;

const Fragment = styled.div`
  margin: 5px 0;
`;

export const GamePage = ({ game, screenshots }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <Wrapper>
      <Back onClick={handleBack}> &lt; Назад</Back>
      <Game>
        <Padding>
          <h2>{game.name}</h2>
        </Padding>
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
        <Padding>
          <Fragment>
            <Span>Release date: </Span>
            {game.released}
          </Fragment>
          <Fragment>
            <Span>Rating: </Span>
            {game.rating}
          </Fragment>
          <Fragment>
            <Span>Website: </Span>
            <Link href={game.website}>{game.website}</Link>
          </Fragment>
          <Fragment>
            <Span>Description: </Span>
            <div dangerouslySetInnerHTML={{ __html: game.description }} />
          </Fragment>
        </Padding>
        <GameGallery screenshots={screenshots} />
      </Game>
    </Wrapper>
  );
};
