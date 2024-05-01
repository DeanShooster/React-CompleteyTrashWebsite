import "./index.scss";
import { Brain } from "../../../../../../assets";

interface ILevel {
  levelNumber: number;
}

export const Level = ({ levelNumber }: ILevel) => {
  return (
    <h2 className="level-wrapper">
      Level:
      {new Array(levelNumber).fill(0).map((_, index: number) => {
        return <img key={index} alt="" src={Brain} />;
      })}
    </h2>
  );
};
