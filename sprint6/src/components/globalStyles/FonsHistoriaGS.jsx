import { createGlobalStyle } from "styled-components";

export const FonsHistoriaGS = createGlobalStyle`
  body {
    background-image: url(${({historia, textActiu}) => historia[textActiu-1].img});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }
  `;

