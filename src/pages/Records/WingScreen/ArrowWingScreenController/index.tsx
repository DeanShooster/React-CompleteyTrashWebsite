
import { IWing, wings } from '../../../../data/records';

import './index.scss';
import { ArrowCircleLeft, ArrowCircleRight } from '../../../../assets';

interface IArrowWingScreenController{
    wingData: IWing;
    setWing: Function;
}

export const ArrowWingScreenController = ({wingData,setWing} : IArrowWingScreenController) => {

    const wingNextPrevHandler = (next: boolean) => {
        const indexLocation = wings.findIndex((wing: IWing)=> wing.name === wingData.name);
        if(next) setWing(wings[indexLocation + 1])
        else setWing(wings[indexLocation - 1])
    }

    return (
        <div className='wing-screen-arrow-controller-container'>
            {wings[0].name !== wingData.name && 
                <div onClick={()=>wingNextPrevHandler(false)}>
                    <img alt='' src={ArrowCircleLeft}/>
                </div>
            }
            {wings[wings.length - 1].name !== wingData.name && 
                <div className={wings[0].name === wingData.name ? 'solo-right-arrow' : undefined} onClick={()=>wingNextPrevHandler(true)}>
                    <img alt='' src={ArrowCircleRight}/>
                </div>
            }
        </div>
    );
}