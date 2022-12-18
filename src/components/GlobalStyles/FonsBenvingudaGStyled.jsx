import {createGlobalStyle} from 'styled-components';
import imatgeFons from '../../assets/img/fonsEstels.jpg';

export const FonsBenvingudaGS = createGlobalStyle`
  body {
    background: url(${imatgeFons});
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;
