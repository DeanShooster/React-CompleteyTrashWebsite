
import './index.scss';

interface IBackgroundWall{
    bgColor?: string;
    bgRef?: any;
}

export const BackgroundWall = ({bgColor, bgRef}: IBackgroundWall) => {
    return <div className='background-wall' style={{background: bgColor || 'rgba(0, 0, 0, 0.5)'}} ref={bgRef || undefined}></div>;
}