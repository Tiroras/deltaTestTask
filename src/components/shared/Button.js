import styled from "styled-components";
import { colors } from "@/styles/variables";

export const Button = styled.button`
  background-color: ${colors.black3};
  border: 0;
  color: ${colors.white};
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: 300ms;
  &:hover {
    background-color: ${colors.black4};
    transition: 300ms;
  }
`;
