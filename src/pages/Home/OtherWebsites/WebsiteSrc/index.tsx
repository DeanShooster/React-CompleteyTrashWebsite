import { IMedia } from "../../../../constants/media";

import './index.scss';

interface IWebsiteSrc{
    data: IMedia;
}

export const WebsiteSrc = ( {data} : IWebsiteSrc) => {
    return (
        <div className="other-website-source" onClick={()=> window.open(data.url)}>
            <span>
                <img alt='' src={data.image}/>
                {data.name}
            </span>
        </div>
    );
}