import { useState, useRef } from "react";
import { IBingoCard, bingoCards } from "../../../../data/bingoCards";
import { clipboardTitle } from "../../../../constants/general";

import { BingoBoard } from "./BingoBoard";

import "./index.scss";
import { randomNumberZeroToLimit } from "../../../../utils/math";
import { Modal } from "../../../../components/Modal";

export const BingoGame = () => {
  const bingoBoardSize = 9;
  const [timeOut, setTimeOut] = useState<NodeJS.Timeout | undefined>(undefined);
  const [cards, setCards] = useState<IBingoCard[]>(
    Array.from({ length: bingoBoardSize }, () => {
      return { fractal: "", title: "", data: "", image: "" };
    })
  );
  const [rolling, setRolling] = useState<boolean | null>(null);
  const bingoBoardRef = useRef<any>();
  const [showMsg, setShowMsg] = useState<string | null>(null);

  const rollGameHandler = () => {
    setRolling(true);
    const randomBingos: IBingoCard[] = [];
    while (randomBingos.length < bingoBoardSize) {
      const randomCard = randomNumberZeroToLimit(bingoCards.length);
      if (randomBingos.includes(bingoCards[randomCard])) continue;
      randomBingos.push(bingoCards[randomCard]);
    }
    setTimeOut(
      setTimeout(() => {
        setRolling(false);
        setCards(randomBingos);
      }, 3000)
    );
  };

  const resetHandler = () => {
    if (rolling) clearTimeout(timeOut);
    setRolling(null);
    setCards(
      Array.from({ length: bingoBoardSize }, () => {
        return { fractal: "", title: "", data: "", image: "" };
      })
    );
  };

  return (
    <>
      <section className="bingo-game-container">
        <div className="bingo-buttons-container">
          <button onClick={rollGameHandler}>Roll a Bingo Game</button>
          <button onClick={resetHandler}>Reset</button>
        </div>
        <BingoBoard cards={cards} rolling={rolling} bingoBoardRef={bingoBoardRef} />
      </section>
      {showMsg && <Modal title={clipboardTitle} text={showMsg} closeModal={() => setShowMsg(null)} />}
    </>
  );
};
