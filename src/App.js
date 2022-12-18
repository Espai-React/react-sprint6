import { NormalizeModernGS } from "./components/GlobalStyles/NormalizeModernGStyled";
import { useState } from "react";
import { historia } from "./data/historia";
import { Escena } from "./components/Escena/Escena";
import { Botons } from "./components/Botons/Botons";
import { FonsBenvingudaGS } from "./components/GlobalStyles/FonsBenvingudaGStyled";
import { Benvinguda } from "./components/Benvinguda/Benvinguda";
import { FonsHistoriaGS } from "./components/GlobalStyles/FonsHistoriaGStyled";

function App() {
  const [inici, setInici] = useState(true);
  const [textActiu, setTextActiu] = useState(1);
  
  const eInici = () => setInici(false);
  const increment = () =>
    textActiu !== historia.length && setTextActiu((textActiu) => textActiu + 1);
  const decrement = () =>
    textActiu !== 1 && setTextActiu((textActiu) => textActiu - 1);
  const src = historia[textActiu - 1].img;

  return (
    <div className="App">
      <NormalizeModernGS />
      {inici ? (
        <>
          <FonsBenvingudaGS />
          <Benvinguda eInici={eInici} />
        </>
      ) : (
        <>
          <FonsHistoriaGS src={src} />
          <Botons increment={increment} decrement={decrement} />
          <Escena historia={historia} textActiu={textActiu} />
        </>
      )}
    </div>
  );
}
export default App;
