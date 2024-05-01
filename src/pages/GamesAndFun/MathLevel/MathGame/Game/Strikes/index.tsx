import { Cross } from "../../../../../../assets";

import "./index.scss";

interface IStrikes {
  strikesNum: number;
}

export const Strikes = ({ strikesNum }: IStrikes) => {
  if (strikesNum === 0) return null;

  const strikesAmount = new Array(strikesNum).fill(0);

  return (
    <div className="strike-container">
      <h2>Strikes:</h2>
      {strikesAmount.map((_, index: number) => {
        return <img key={index} alt="" src={Cross} />;
      })}
    </div>
  );
};
