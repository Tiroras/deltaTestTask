"use client";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { NoGames } from "./NoGames";
import { variables } from "@/styles/variables";
import { api } from "@/api";
import { Game } from "./Game";

const Wrapper = styled.div`
  max-width: ${variables.maxContentWidth};
  margin: 0 auto;
  min-height: 75vh;
  padding: 0 20px;
`;

export const GamesList = ({ search, ordering, selectedPlatforms }) => {
  const [pageSize, setPageSize] = useState(10);
  const [games, setGames] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPageSize((size) => size + 10);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const updateGames = async () => {
      const data = await api.getGames(
        pageSize,
        search,
        ordering,
        selectedPlatforms.join(","),
      );
      setGames(data.results);
    };

    updateGames();
  }, [pageSize, search, ordering, selectedPlatforms, selectedPlatforms.length]);

  return (
    <Wrapper>
      {!games || games.length === 0 ? <NoGames /> : null}
      {games.map((game) => (
        <Game key={game.slug} game={game} />
      ))}
    </Wrapper>
  );
};
