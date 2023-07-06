
import './index.scss';

interface IGlowingTitle{
    aboveTitle?: string;
    title: string;
    subTitle?: string;
}

export const GlowingTitle = ({aboveTitle ,title,subTitle }: IGlowingTitle) => {
    return (
        <h1 className='recruitment-title'>
            {aboveTitle}
            <span>{title}</span>
            <div>{subTitle}</div>
        </h1>
    );
}