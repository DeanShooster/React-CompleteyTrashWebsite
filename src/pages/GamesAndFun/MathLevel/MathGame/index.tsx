import { Notebook } from "./Notebook";
import { Game } from "./Game";

import "./index.scss";

export const MathGame = () => {
  return (
    <div className="math-level-game-container">
      <h1>What is your Math Level?</h1>
      <div>
        <Notebook />
        <Game />
      </div>
    </div>
  );
};
