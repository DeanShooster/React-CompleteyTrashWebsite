import { IEncounter } from "../../../../data/records";
import { wingClassToString } from "../../../../utils/string";

import "./index.scss";

interface IWingStrikeIntro {
  wingStrikeData: IEncounter;
  setWingStrikeRecords: Function;
  scrollToRecord: Function;
}

export const WingStrikeIntro = ({ wingStrikeData, setWingStrikeRecords, scrollToRecord }: IWingStrikeIntro) => {
  const wingName = wingClassToString(wingStrikeData.name);

  const setWingHandler = () => {
    setWingStrikeRecords(wingStrikeData.wingName);
    scrollToRecord();
  };

  return (
    <div className="wing-strike-intro-container">
      <h1>{wingName}</h1>
      <h2>{wingStrikeData.wingName}</h2>
      <ul>
        {wingStrikeData.bosses.map((boss: string, index: number) => {
          return <li key={index}>{boss}</li>;
        })}
      </ul>
      <button onClick={setWingHandler}>View Records</button>
    </div>
  );
};
