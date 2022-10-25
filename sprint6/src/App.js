import { NormalizeModernGS } from "./components/NormalizeModern";
import { useState } from "react";
import { textosHistoria } from "./data/textosHistoria";
import { Escena } from "./components/escena/Escena";
import { Botons } from "./components/botons/Botons";
import { Benvinguda } from "./components/benvinguda/Benvinguda";

function App() {
  const [inici, setInici] = useState(true);
  const eInici = () => setInici(false);

  const [textActiu, setTextActiu] = useState(1);
  const increment = () =>
    textActiu !== textosHistoria.length &&
    setTextActiu((textActiu) => textActiu + 1);
  const decrement = () =>
    textActiu !== 1 && setTextActiu((textActiu) => textActiu - 1);

  return (
    <div className="App">
      <NormalizeModernGS />
      {inici ? (
        <>
          <Benvinguda eInici={eInici} />
        </>
      ) : (
        <>
          <Botons increment={increment} decrement={decrement} />
          <Escena textosHistoria={textosHistoria} textActiu={textActiu} />
        </>
      )}
    </div>
  );
}

export default App;
