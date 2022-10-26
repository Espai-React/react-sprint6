import React from "react";
import { ContainerS, ContainerTextS, Boto2S, ImgS } from "./styled";
import imatgeSprint6 from "../../assets/img/iniciSprint6.png";

export const Benvinguda = ({ eInici }) => {
  return (
    <ContainerS className="container-inici">
      <ContainerTextS className="container-text">
        <h1>Benvinguts a l'Sprint6</h1>
        <p>
          En aquest lliurament posarem en pràctica els conceptes bàsics que hem
          après de React.
        </p>
        <p>
          Un/a client/a que té com a producte principal una web de gestió
          empresarial desenvolupada amb React, ens ha demanat que desenvolupem
          un tutorial, en el qual mitjançant dos botons els nous usuaris puguin
          avançar i retrocedir en els consells, modificant-se el text d'ajuda i
          la imatge de fons.
        </p>
      </ContainerTextS>
      <ImgS className="imatgeSprint6" src={imatgeSprint6} alt="foto sprint6" />
      <Boto2S className="boto-inici" onClick={eInici}>
        Inici
      </Boto2S>
    </ContainerS>
  );
};
