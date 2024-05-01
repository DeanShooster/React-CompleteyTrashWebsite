import { useState } from "react";
import { useOutletContext } from "react-router";
import { IGame } from "../../../data/games";

import { Instructions } from "./Instructions";
import { MathGame } from "./MathGame";

import "./index.scss";

export const MathLevel = () => {
  const [startGame, setStartGame] = useState<boolean>(false);

  const game: IGame = useOutletContext();

  return (
    <section className={`math-level-page ${startGame ? "math-level-game-started" : ""}`}>
      {startGame ? (
        <MathGame />
      ) : (
        <>
          {game !== null && <Instructions instructions={game.instructions || []} />}
          <button onClick={() => setStartGame(true)}>
            <div>Let's Play</div> What is your Math Level?
          </button>
        </>
      )}
    </section>
  );
};
