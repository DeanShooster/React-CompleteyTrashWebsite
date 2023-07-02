
import { GuildInfo } from './GuildInfo';
import { TitleAndVideo } from '../../../components/TitleAndVideo';

import './index.scss';

export const GeneralInfo = () => {
    return (
        <div className='general-info-container'>
            <GuildInfo />
            <TitleAndVideo />
        </div>
    );
}