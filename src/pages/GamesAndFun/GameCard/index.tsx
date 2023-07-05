import { useState } from 'react';
import { useNavigate } from 'react-router';
import { IGame } from "../../../data/games";

import './index.scss';
import { ImageBorderBlackFence } from '../../../components/ImageBorderBlackFence';

interface IGameCard{
    data: IGame;
}

export const GameCard = ({data}: IGameCard) => {
    const [letsPlay,setLetsPlay] = useState(false);
    const navigate = useNavigate();

    const gameNavigationHandler = () =>{
        if(data.source)  window.open(data.source)
        else navigate(data.name);
    }

    return (
        <div className='game-card-container'>
            <h1>{data.name}</h1>
            <div className='game-card-image-container' onMouseOver={()=>setLetsPlay(true)} onMouseLeave={()=>setLetsPlay(false)} >
                <ImageBorderBlackFence />
                <img alt='' src={data.image} className='game-card-image' />
                {letsPlay && <div className='lets-play' onClick={gameNavigationHandler}><span>Lets Play</span></div>}
            </div>
            <p>{data.bgText}</p>
        </div> 
    );
}