
import './index.scss';

interface IAnimatedTitleHeader{
    title: string;
    style?: any;
}

export const AnimatedTitleHeader = ({title,style}:IAnimatedTitleHeader) => {
    return (
        <h1 className='recruitment-info-title' style={style}>{title}</h1>
    );
}