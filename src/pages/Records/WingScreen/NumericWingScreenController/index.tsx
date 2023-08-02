import { IEncounter, encounter } from '../../../../data/records';
import { isNumber } from '../../../../utils/string';

import './index.scss';

interface INumericWingScreenController{
    wingStrikeData: IEncounter;
    setEncounter: Function;
}

export const NumericWingScreenController = ({wingStrikeData ,setEncounter} : INumericWingScreenController) => {

    const wingClassHandler = (wingStrikeNumber: number) => {
        if(wingStrikeData.name === encounter[wingStrikeNumber].name) return;
        else setEncounter(encounter[wingStrikeNumber]);
    }

    return (
        <div className='wing-strike-screen-controller-container'>
            {encounter.map((wingStrike: IEncounter,index: number)=>{
                const wingStrikeName = wingStrike.name;
                const wingNumber = wingStrikeName.charAt(wingStrikeName.length - 1);
                return (
                    <div key={index} onClick={()=>wingClassHandler(index)} className={wingStrikeName === wingStrikeData.name ? 'active-wing-strike' : undefined}>
                        {isNumber(wingNumber) ? wingNumber : wingStrike.wingName.substring(0,3)}
                    </div>
                );
            })}
        </div>
    );
}