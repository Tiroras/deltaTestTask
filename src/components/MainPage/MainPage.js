"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { Search } from "./Search";
import { SortButtons } from "./SortButtons";
import { GamesList } from "./GamesList";
import { FilterPlatforms } from "./FilterPlatforms";
import { variables } from "@/styles/variables";
import { SelectedPlatforms } from "./SelectedPlatforms";

const FormUtilsButtons = styled.div`
  max-width: ${variables.maxContentWidth};
  margin: 0 auto;
  padding: 0 20px;
  @media (min-width: 420px) {
    display: flex;
  }
`;

export const MainPage = ({ data, platforms }) => {
  const [search, setSearch] = useState("");
  const [ordering, setOrdering] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [localPlatforms, setLocalPlatforms] = useState(selectedPlatforms);

  const handleSearch = (search) => {
    setSearch(search);
  };

  const handleOrdering = (order) => {
    setOrdering(order);
  };

  const handlePlatforms = () => {
    setSelectedPlatforms(localPlatforms);
  };

  return (
    <div>
      <form>
        <Search setSearch={handleSearch} setPlatforms={handlePlatforms} />
        <FormUtilsButtons>
          <SortButtons ordering={ordering} setOrdering={handleOrdering} />
          <FilterPlatforms
            platforms={platforms}
            localPlatforms={localPlatforms}
            setLocalPlatforms={setLocalPlatforms}
          />
        </FormUtilsButtons>
      </form>
      <SelectedPlatforms
        platforms={platforms}
        selectedPlatforms={selectedPlatforms}
      />
      <GamesList
        data={data}
        search={search}
        ordering={ordering}
        selectedPlatforms={selectedPlatforms}
      />
    </div>
  );
};
