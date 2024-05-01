import { useEffect, useState } from "react";
import { IMathLevelQA, mathQuestionsLevelOne, mathQuestionsLevelThree, mathQuestionsLevelTwo } from "../../../../../data/mathLevelQA";
import { randomNumberZeroToLimit } from "../../../../../utils/math";

import { Progress } from "./Progress";
import { Level } from "./Level";
import { Strikes } from "./Strikes";
import { ModalMsg } from "./ModalMsg";

import "./index.scss";

export type ModalMsgText = "Strike" | "LevelUp";

export const Game = () => {
  const mathQuestions: IMathLevelQA[][] = [mathQuestionsLevelOne, mathQuestionsLevelTwo, mathQuestionsLevelThree];
  const maxQuestionsPerLevel = 5;

  // Init Default Values
  const [level, setLevel] = useState<number>(1);
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [timer, setTimer] = useState<number>(60);
  const [mathQA, setMathQA] = useState<IMathLevelQA>(mathQuestions[0][randomNumberZeroToLimit(mathQuestionsLevelOne.length)]);
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [strikes, setStrikes] = useState<number>(0);

  const [ongoingGame, setOngoingGame] = useState<boolean>(true);
  const [modalMsgLevelupOrError, setModalMsgLevelupOrError] = useState<ModalMsgText | null>(null);

  useEffect(() => {
    if (!ongoingGame) return;
    else {
      if (timer > 0) {
        setTimeout(() => {
          setTimer(timer - 1);
        }, 1000);
      } else {
        setOngoingGame(false);
      }
    }
  }, [ongoingGame, timer]);

  const answerHandler = (answer: string) => {
    if (!ongoingGame) return;
    setOngoingGame(false);
    setSelectedAnswer(answer);
    if (answer !== mathQA.answers.correctAnswer) {
      if (strikes + 1 === 4) {
        //TODO End Game + Stats
      } else {
        setStrikes(strikes + 1);
        setModalMsgLevelupOrError("Strike");
        return;
      }
    }
    setTimeout(() => {
      if (questionNumber + 1 === 6) {
        setLevel(level + 1);
        setModalMsgLevelupOrError("LevelUp");
        return;
      }
      setQuestionNumber(questionNumber + 1);
      setSelectedAnswer("");
      setTimer(60);

      const index = mathQuestions[level - 1].findIndex((e) => e.answers.correctAnswer === mathQA.answers.correctAnswer);
      mathQuestions[level - 1].splice(index, 1);

      setMathQA(mathQuestions[level - 1][randomNumberZeroToLimit(mathQuestions[level - 1].length)]);
      setOngoingGame(true);
    }, 2000);
  };

  return (
    <>
      <div className="game-container">
        <div className="game-data-container">
          <Level levelNumber={level} />
          <div>
            <Progress current={questionNumber} max={maxQuestionsPerLevel} />
            <time>{timer}</time>
          </div>
          <Strikes strikesNum={strikes} />
        </div>
        <div className="math-qa-container">
          <div className="question">
            {mathQA.question.img ? (
              <div>
                <img alt="" src={mathQA.question.img} />
                <p>{mathQA.question.text}</p>
              </div>
            ) : (
              mathQA.question.text
            )}
          </div>
          <div className="answers-container">
            {mathQA.answers.possibleAnswers.map((possibleAnswer: string, index: number) => {
              return (
                <div
                  key={index}
                  onClick={() => answerHandler(possibleAnswer)}
                  className={selectedAnswer === possibleAnswer ? (selectedAnswer === mathQA.answers.correctAnswer ? "correct-answer" : "wrong-answer") : undefined}
                >
                  {possibleAnswer}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {modalMsgLevelupOrError && (
        <ModalMsg
          strikes={strikes}
          msg={modalMsgLevelupOrError}
          continueGame={() => {
            if (modalMsgLevelupOrError === "Strike") {
              setQuestionNumber(questionNumber + 1);
              setSelectedAnswer("");
              setTimer(60);

              const index = mathQuestions[level - 1].findIndex((e) => e.answers.correctAnswer === mathQA.answers.correctAnswer);
              mathQuestions[level - 1].splice(index, 1);

              setMathQA(mathQuestions[level - 1][randomNumberZeroToLimit(mathQuestions[level - 1].length)]);
            } else {
              if (strikes > 0) setStrikes(strikes - 1);

              setQuestionNumber(1);
              setSelectedAnswer("");
              setTimer(60);

              setMathQA(mathQuestions[level - 1][randomNumberZeroToLimit(mathQuestions[level - 1].length)]);
            }

            setOngoingGame(true);
            setModalMsgLevelupOrError(null);
          }}
        />
      )}
    </>
  );
};
