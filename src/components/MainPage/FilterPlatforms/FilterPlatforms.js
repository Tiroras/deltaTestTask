"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { FilterLabel } from "./FilterLabel";
import { FilterPopup } from "./FilterPopup";
import { FilterList } from "./FilterList";

const Wrapper = styled.div`
  position: "relative";
  margin-top: 10px;
  @media (min-width: 420px) {
    width: 220px;
    margin: 0;
  }
`;

export const FilterPlatforms = ({
  platforms,
  localPlatforms,
  setLocalPlatforms,
}) => {
  console.log(localPlatforms);
  const [openList, setOpenList] = useState(false);
  const windowWidth = useRef(null);

  useEffect(() => {
    windowWidth.current = window.innerWidth;
  }, []);

  const handleCheck = (id) => {
    if (localPlatforms.includes(id)) {
      setLocalPlatforms(
        localPlatforms.filter((platformId) => platformId !== id),
      );
    } else {
      setLocalPlatforms([...localPlatforms, id]);
    }
  };

  const handleClose = () => {
    setOpenList(false);
  };

  return (
    <Wrapper>
      <FilterLabel
        openList={openList}
        count={localPlatforms.length}
        setOpenList={setOpenList}
      />
      {openList &&
        (windowWidth.current <= 420 ? (
          <FilterPopup
            platforms={platforms}
            selectedPlatforms={localPlatforms}
            handleCheck={handleCheck}
            handleClose={handleClose}
          />
        ) : (
          <FilterList
            isDesktop
            platforms={platforms}
            selectedPlatforms={localPlatforms}
            handleCheck={handleCheck}
            handleClose={handleClose}
          />
        ))}
    </Wrapper>
  );
};
