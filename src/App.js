import EffectHook from "./components/EffectHook";
import StateHook from "./components/StateHook";
import "./css/App.css";
import { useState } from "react";
import Timer from "./components/Timer";

function App() {
  const [showTimers, hideTimers] = useState(false);

  return (
    <div className="App">
      {showTimers && <Timer />}
      <button onClick={() => hideTimers(!showTimers)}> toggle btn</button>
      <StateHook />
      <EffectHook />
    </div>
  );
}

export default App;
