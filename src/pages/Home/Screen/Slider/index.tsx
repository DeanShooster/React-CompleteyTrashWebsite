import { useState, useEffect } from 'react';

import { IMedia, homePageScreens } from "../../../../constants/media";

import './index.scss';

export const Slider = () => {
    const [screen,setScreen] = useState<IMedia>(homePageScreens[0]);
    const [screenIndex,setScreenIndex] = useState<number>(0);

    useEffect(()=>{
        if(screenIndex > homePageScreens.length - 1){ setScreen(homePageScreens[0]); setScreenIndex(0);}
        else setScreen(homePageScreens[screenIndex])
        setTimeout(() => setScreenIndex(screenIndex + 1),5000);
    },[screenIndex])

    return (
        <div className="slider-frame-wrapper" onClick={()=>window.open(screen.url)}>
            <img alt='' src={screen.image}/>
            <span>{screen.name}</span>
        </div>
    );
}