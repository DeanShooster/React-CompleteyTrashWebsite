import { IWing, wings } from '../../../../data/records';

import './index.scss';

interface INumericWingScreenController{
    wingData: IWing;
    setWing: Function;
}

export const NumericWingScreenController = ({wingData ,setWing} : INumericWingScreenController) => {

    const wingClassHandler = (wingNumber: number) => {
        if(wingData.name === wings[wingNumber].name) return;
        else setWing(wings[wingNumber]);
    }

    return (
        <div className='wing-screen-controller-container'>
            {wings.map((wing: IWing,index: number)=>{
                const wingName = wing.name;
                return (
                    <div key={index} onClick={()=>wingClassHandler(index)} className={wingName === wingData.name ? 'active-wing' : undefined}>
                        {wingName.charAt(wingName.length - 1)}
                    </div>
                );
            })}
        </div>
    );
}