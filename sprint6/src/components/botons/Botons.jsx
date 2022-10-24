import React from "react";
import { DivBotonsS, BotoS } from "./styled";

export const Botons = ({ increment, decrement }) => (
  <DivBotonsS className="botons">
    <BotoS className="boto" onClick={decrement}>
      Anterior
    </BotoS>
    <BotoS className="boto" onClick={increment}>
      Següent
    </BotoS>
  </DivBotonsS>
);
