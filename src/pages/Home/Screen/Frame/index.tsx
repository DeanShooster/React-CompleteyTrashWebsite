import { IMedia } from "../../../../constants/media";

import './index.scss';

interface IFrame{
    data: IMedia;
}

export const Frame = ({data} : IFrame) => {
    return (
        <div className="frame-wrapper" onClick={()=>window.open(data.url)}>
            <img alt='' src={data.image} loading="lazy"/>
            <div className="frame-bg-wall"><span>{data.name}</span></div>
        </div>
    );
}