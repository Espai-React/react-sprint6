import React from "react";
import { ContainerEscenesS, EscenaS } from "./styled";

export const Escena = ({ historia, textActiu }) => (
  <ContainerEscenesS className="escenes">
    {historia.map((element) => (
      <EscenaS
        key={element.id}
        className={`"text" ${textActiu === element.id ? "fonsActiu" : ""}`}>
        {element.text}
      </EscenaS>
    ))}
  </ContainerEscenesS>
);
