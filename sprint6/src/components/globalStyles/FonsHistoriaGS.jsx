import { createGlobalStyle } from 'styled-components';

export const FonsHistoriaGS = createGlobalStyle`
  body {
    background-image: url(${({src}) => src});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }
  `;

