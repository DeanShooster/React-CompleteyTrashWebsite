import { useEffect } from "react";
import { useLocation } from "react-router";
import { IEncounter, encounter } from "../../../../data/records";
import { isNumber } from "../../../../utils/string";

import "./index.scss";
import { recordTarget } from "../../../../constants/routing";

interface INumericWingScreenController {
  wingStrikeData: IEncounter;
  setEncounter: Function;
}

export const NumericWingScreenController = ({ wingStrikeData, setEncounter }: INumericWingScreenController) => {
  const { search } = useLocation();
  const queryParams = new URLSearchParams(search);
  const queryTargetSearch = queryParams.get(recordTarget);

  useEffect(() => {
    if (!queryTargetSearch) return;
    switch (queryTargetSearch) {
      case "1": {
        setEncounter(encounter[0]);
        return;
      }
      case "2": {
        setEncounter(encounter[1]);
        return;
      }
      case "3": {
        setEncounter(encounter[2]);
        return;
      }
      case "4": {
        setEncounter(encounter[3]);
        return;
      }
      case "5": {
        setEncounter(encounter[4]);
        return;
      }
      case "6": {
        setEncounter(encounter[5]);
        return;
      }
      case "7": {
        setEncounter(encounter[6]);
        return;
      }
      case "IBS": {
        setEncounter(encounter[7]);
        return;
      }
      case "EOD": {
        setEncounter(encounter[8]);
        return;
      }
      case "SOTO": {
        setEncounter(encounter[9]);
        return;
      }
      default: {
        return;
      }
    }
  }, [queryTargetSearch, setEncounter]);

  const wingClassHandler = (wingStrikeNumber: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (wingStrikeData.name === encounter[wingStrikeNumber].name) return;
    else setEncounter(encounter[wingStrikeNumber]);
  };

  return (
    <div className="wing-strike-screen-controller-container">
      {encounter.map((wingStrike: IEncounter, index: number) => {
        const wingStrikeName = wingStrike.name;
        const wingNumber = wingStrikeName.charAt(wingStrikeName.length - 1);
        return (
          <div key={index} onClick={() => wingClassHandler(index)} className={wingStrikeName === wingStrikeData.name ? "active-wing-strike" : undefined}>
            {isNumber(wingNumber) ? wingNumber : wingStrike.wingName.substring(0, 4)}
          </div>
        );
      })}
    </div>
  );
};
