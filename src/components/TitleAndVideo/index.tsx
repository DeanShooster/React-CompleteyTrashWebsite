import { useState } from 'react';

import './index.scss';

interface ITitleAndVideo{
    title?: string[];
    source: string[];
    style?: any;
}

export const TitleAndVideo = ({title,source,style} : ITitleAndVideo) => {
    const [videoIndex,setVideoIndex] = useState(0);
    return (
        <div className='video-container' style={style}>
            {title && <h2 className='video-title'>{title ? title[videoIndex] : undefined}</h2>}
            <iframe
                src={source[videoIndex]}
                title={title ? title[videoIndex] : undefined} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            {source.length > 0 &&
                <div className='video-nav-dots'>
                    {source.map((_,index: number)=>{
                        return <div key={index} className={index === videoIndex ? 'selected-dot' : undefined} onClick={()=>setVideoIndex(index)}></div>
                    })}
                </div>
            }
        </div>
    );
}