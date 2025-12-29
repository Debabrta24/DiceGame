import { useState } from "react";
import "./App.css";
import { StartGame } from "./Component/StartGame";
import { GamePlay } from "./Component/GamePlay";

function App() {
  const [isGameStarted, setGameisStarted] = useState(true);
  const toggleGamePlay = () => {
    setGameisStarted((prev) => !prev);
  };
  return <>{isGameStarted ? <GamePlay /> : <StartGame
    
    toggle={toggleGamePlay}
    />}</>;
}

export default App;
