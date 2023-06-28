import { useState, useEffect } from 'react';

const screenSize: {ipad: number , mobile: number} = { ipad: 1250, mobile: 600 };

export default function useWindowSize(){
    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(()=>{
        const updateWindowSize = () => setWindowSize(window.innerWidth)
        window.addEventListener('resize',updateWindowSize);
        return ()=> window.removeEventListener('resize',updateWindowSize)
    },[])
    
    return {windowSize , screenSize};
}