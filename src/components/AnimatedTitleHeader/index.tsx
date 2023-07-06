
import './index.scss';

interface IAnimatedTitleHeader{
    title: string;
}

export const AnimatedTitleHeader = ({title}:IAnimatedTitleHeader) => {
    return (
        <h1 className='recruitment-info-title'>{title}</h1>
    );
}