
import './index.scss';

interface IBackgroundImage{
    image: string;
    style?: any;
}

export const BackgroundImage = ({image , style} : IBackgroundImage) => {
    return (
        <div className='background-image-wrapper' style={style}>
            <img alt='' src={image}/>
        </div>
    );
}