"use client";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { FilterList } from "./FilterList";
import styled from "styled-components";
import { colors } from "@/styles/variables";

const Popup = styled.div`
  height: 100vh;
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Background = styled.div`
  background: ${colors.black};
  opacity: 0.3;
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const FilterPopup = ({
  platforms,
  selectedPlatforms,
  handleCheck,
  handleClose,
}) => {
  const modalContainer = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    modalContainer.current = document.querySelector("#modal");
    setMounted(true);
  }, []);

  const handleBackgroundClose = (e) => {
    e.preventDefault();
    e.stopPropagation();
    handleClose();
  };

  return mounted
    ? createPortal(
        <Popup>
          <Background onClick={handleBackgroundClose} />
          <FilterList
            platforms={platforms}
            selectedPlatforms={selectedPlatforms}
            handleCheck={handleCheck}
            handleClose={handleClose}
          />
        </Popup>,
        modalContainer.current,
      )
    : null;
};
