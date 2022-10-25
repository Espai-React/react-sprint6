import React from "react";
import { DivEscenesS, EscenaS } from "./styled";

export const Escena = ({ historia, textActiu }) => (
  
  <DivEscenesS className="escenes">
    {historia.map((element) =>
        <EscenaS key={element.id} className={`"text" ${(textActiu === element.id) ? "fonsActiu" : ""}`}>{element.text}</EscenaS>)}
  </DivEscenesS>
);
