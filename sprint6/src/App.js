import "./App.css";
import NormalizeModern from "./components/NormalizeModern";
import { Escena } from "./components/escena/Escena";

function App() {
  return (
    <div className="App">
      <NormalizeModern />
      <div>
        <Escena />
      </div>
    </div>
  );
}

export default App;
