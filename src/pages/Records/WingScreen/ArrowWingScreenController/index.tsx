
import { IEncounter, encounter } from '../../../../data/records';

import './index.scss';
import { ArrowCircleLeft, ArrowCircleRight } from '../../../../assets';

interface IArrowWingScreenController{
    wingStrikeData: IEncounter;
    setEncounter: Function;
}

export const ArrowWingScreenController = ({wingStrikeData,setEncounter} : IArrowWingScreenController) => {

    const wingNextPrevHandler = (next: boolean) => {
        const indexLocation = encounter.findIndex(( wingStrike: IEncounter)=> wingStrike.name === wingStrikeData.name);
        if(next) setEncounter(encounter[indexLocation + 1])
        else setEncounter(encounter[indexLocation - 1])
    }

    return (
        <div className='wing-strike-screen-arrow-controller-container'>
            {encounter[0].name !== wingStrikeData.name && 
                <div onClick={()=>wingNextPrevHandler(false)}>
                    <img alt='' src={ArrowCircleLeft}/>
                </div>
            }
            {encounter[encounter.length - 1].name !== wingStrikeData.name && 
                <div className={encounter[0].name === wingStrikeData.name ? 'solo-right-arrow' : undefined} onClick={()=>wingNextPrevHandler(true)}>
                    <img alt='' src={ArrowCircleRight}/>
                </div>
            }
        </div>
    );
}