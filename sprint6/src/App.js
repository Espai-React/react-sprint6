import "./App.css";
import NormalizeModern from "./components/NormalizeModern";
import { Escena } from "./components/escena/Escena";
import { textosHistoria } from "./data/textosHistoria";

function App() {
  return (
    <div className="App">
      <NormalizeModern />
      <div>
        {textosHistoria.map((element) => (
          <Escena key={element.id} text={element.text} />
        ))}
      </div>
    </div>
  );
}

export default App;
