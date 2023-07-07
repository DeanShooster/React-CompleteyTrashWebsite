
import './index.scss';

interface ITitleAndVideo{
    title?: string;
    source: string;
    style?: any;
}

export const TitleAndVideo = ({title,source,style} : ITitleAndVideo) => {
    return (
        <div className='video-container' style={style}>
            {title && <h2 className='video-title'>{title}</h2>}
            <iframe
                src={source}
                title={title} 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
    );
}