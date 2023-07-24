
import { useNavigate } from 'react-router';
import { IWing } from '../../../../data/records';
import { wingClassToString } from '../../../../utils/string';

import './index.scss';

interface IWingIntro{
    wingData: IWing
}

export const WingIntro = ({wingData} : IWingIntro) => {
    const navigate = useNavigate();
    const wingName = wingClassToString(wingData.name);
    return (
        <div className='wing-intro-container'>
            <h1>{wingName}</h1>
            <h2>{wingData.wingName}</h2>
            <ul>
                {wingData.bosses.map((boss: string,index: number)=>{return <li key={index}>{boss}</li>})}
            </ul>
            <button onClick={()=>navigate(wingName)}>View Records</button>
        </div>
    );
}