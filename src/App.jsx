import React, { useState } from "react";
import GameOver from "./components/GameOver";
import Counter from "./components/Counter";

const App = () => {
  const [isGameOver, setIsGameOver] = useState(false);

  const finishGame = () => {
    setIsGameOver(true);
  };

  return (
    <div style={styles.container}>
      {isGameOver ? <GameOver /> : <Counter finishGame={finishGame} />}
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    marginTop: "30px",
  },
};
export default App;
