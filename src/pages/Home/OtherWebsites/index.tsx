import { IMedia, homePageOtherWebsites } from '../../../constants/media';
import { WebsiteSrc } from './WebsiteSrc';

import './index.scss';

export const OtherWebsites = () => {
    return (
        <div className='other-websites-container'>
            {homePageOtherWebsites.map((website: IMedia, index: number)=>{
                return <WebsiteSrc key={index} data={website}/>;
            })}
        </div>
    );
}