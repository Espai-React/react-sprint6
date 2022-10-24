import NormalizeModern from "./components/NormalizeModern";
import { Escena } from "./components/escena/Escena";
import { textosHistoria } from "./data/textosHistoria";
import { Botons } from "./components/botons/Botons";
import { useState } from "react";

function App() {
  const [textActiu, setTextActiu] = useState(1);
  const increment = () =>
    textActiu !== textosHistoria.length &&
    setTextActiu((textActiu) => textActiu + 1);
  const decrement = () =>
    textActiu !== 1 && setTextActiu((textActiu) => textActiu - 1);

  return (
    <div className="App">
      <NormalizeModern />
      <Botons increment={increment} decrement={decrement} />
      {textosHistoria.map((element) => (
        <Escena
          key={element.id}
          text={element.text}
          esActiu={element.id === textActiu}
        />
      ))}
    </div>
  );
}

export default App;
