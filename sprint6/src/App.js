import { NormalizeModernGS } from "./components/globalStyles/NormalizeModern";
import { useState } from "react";
import { historia } from "./data/historia";
import { Escena } from "./components/escena/Escena";
import { Botons } from "./components/botons/Botons";
import { FonsBenvingudaGS } from "./components/globalStyles/FonsBenvingudaGS";
import { Benvinguda } from "./components/benvinguda/Benvinguda";
import { FonsHistoriaGS } from "./components/globalStyles/FonsHistoriaGS";

function App() {
  const [inici, setInici] = useState(true);
  const eInici = () => setInici(false);
  const [textActiu, setTextActiu] = useState(1);
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
