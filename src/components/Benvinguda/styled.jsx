import styled from "styled-components";
import { BotoS } from "../Botons/styled";

export const ContainerS = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 4rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  width: 60vw;
  height: auto;
  border: 0.3rem solid #000;
  border-radius: 1rem;
`;

export const ContainerTextS = styled.div`
  text-align: center;

  & h1 {
    margin-bottom: 2.5rem;
    font-size: 3.5rem;
  }

  & p {
    margin: 2rem 0;
    font-size: 1.8rem;
    text-align: justify;
  }
`;

export const ImgS = styled.img`
  width:60%;
  object-fit: scale-down;
  border: 0.2rem solid #000;
  border-radius: 1rem;
`;

export const Boto2S = styled(BotoS)`
  width: 25vw;
  padding: 0.5rem;
`; 
