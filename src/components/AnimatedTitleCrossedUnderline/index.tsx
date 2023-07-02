import { Fragment, useEffect, useState } from "react";

import './index.scss';

interface IAnimatedTitleCrossedUnderline{
    titleSentence: string[];
}

export const AnimatedTitleCrossedUnderline = ({titleSentence} : IAnimatedTitleCrossedUnderline) => {

    const [titleIntro,setTitleIntro] = useState('ghost'); // className

    useEffect(()=>{
        setTimeout(() => {
            setTitleIntro('');
        }, 400);
    },[]);

    return (
        <h1 className="animated-title-crossed-underline">
            <ul className="hidden">
                {titleSentence.map((word: string , index: number)=>{
                    const wordArray = word.split('');
                    return (
                        <Fragment key={index}>
                            <li className={titleIntro}>{wordArray[0].toLocaleUpperCase()}</li>
                            {wordArray.map((char: string, index: number)=>{
                                if(index === 0) return null;
                                return <li key={index} className={titleIntro}>{char}</li>
                            })}
                            <li>&nbsp;</li>
                        </Fragment>
                    );
                })}
            </ul>
            <div className='title-cross-underline'>
                <div></div>
                <div></div>
            </div>
        </h1>
    );
}