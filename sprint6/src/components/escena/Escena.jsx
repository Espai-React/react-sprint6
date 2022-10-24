import React from "react";
import { EscenaS } from "./styled";

export const Escena = ({ esActiu, text}) => (
  <EscenaS className={`"text" ${esActiu ? "fonsActiu" : ""}`}>{text}</EscenaS>
);

