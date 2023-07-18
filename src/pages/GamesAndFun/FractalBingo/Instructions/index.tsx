import { useState, useRef, useEffect } from 'react';
import { clickPropagation } from '../../../../constants/general';

import './index.scss';

interface IInstructions{
    instructions: string[];
}

export const Instructions = ({instructions} : IInstructions) => {

    const [showInstructions,setShowInstructions] = useState<boolean>(false);
    const guideRef = useRef<any>();

    useEffect(()=>{
        const clickOutsideHandler = (event: any) => {
            if(guideRef?.current && !guideRef.current?.contains(event.target) && event.target.className !== clickPropagation) setShowInstructions(false);
        }
        window.addEventListener('click',clickOutsideHandler);
        return ()=> window.removeEventListener('click',clickOutsideHandler);
    },[])

    return (
        <div className={`${clickPropagation} instructions-container`}>
            <span className={`${clickPropagation}`} onClick={()=>setShowInstructions(!showInstructions)}>How to Play?</span>
            { showInstructions && 
                <ul className='instructions-wrapper' ref={guideRef}>
                {instructions.map((instruction: string ,index: number)=>{
                    return <li key={index}>{instruction}</li>
                })}
            </ul>}
        </div>
    )
}