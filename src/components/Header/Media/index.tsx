import { useState } from 'react';
import { IMedia, mediaLinks } from '../../../constants/media';

import './index.scss';

interface IBubble{
    bubble: { backgroundColor: string },
    triangle: { borderTop : string;}
}

export const Media = () => {

    const [bubble,setBubble] = useState<string | null>(null);
    const [bubbleColor,setBubbleColor] = useState<IBubble | null>(null);

    const openBubbleHandler = (name: string , index: number) => {
        setBubble(name);
        switch(index){
            case 0:{
                setBubbleColor({
                    bubble: { backgroundColor: '#7289da'},
                    triangle: { borderTop: '7px solid #7289da'}
                }); return;
            }
            case 1: {
                setBubbleColor({
                    bubble: { backgroundColor: '#FF0000'},
                    triangle: { borderTop: '7px solid #FF0000'}
                }); return;
            }
            case 2: {
                setBubbleColor({
                    bubble: { backgroundColor: '#FF5700'},
                    triangle: { borderTop: '7px solid #FF5700'}
                }); return;
            }
        }
    }

    const closeBubbleHandler = () => { setBubble(null); setBubbleColor(null); }

    return (
        <div className='header-media-container'>
            {mediaLinks.map((link: IMedia , index: number)=>{
                return (
                    <div key={index} className='media-item' onClick={() => window.open(link.url)}>
                        <img alt='' src={link.image} onMouseOver={()=> openBubbleHandler(link.name , index)} onMouseLeave={closeBubbleHandler}/>
                        { bubble === link.name && 
                            <div className='media-bubble' style={bubbleColor?.bubble}>
                                {bubble}<span className='triangle' style={bubbleColor?.triangle}></span>
                            </div>
                        }
                    </div>
                );
            })}
        </div>
    );
}