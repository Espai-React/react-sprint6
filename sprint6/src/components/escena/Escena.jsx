import React from "react";
import { DivEscenesS, EscenaS } from "./styled";

export const Escena = ({ textosHistoria, textActiu }) => (
  
  <DivEscenesS className="escenes">
    {textosHistoria.map((element) =>
        <EscenaS key={element.id} className={`"text" ${(textActiu === element.id) ? "fonsActiu" : ""}`}>{element.text}</EscenaS>)}
  </DivEscenesS>
);
