
import { AnimatedTitleCrossedUnderline } from '../../../../components/AnimatedTitleCrossedUnderline';
import { GuildBackground } from './GuildBackground';

import './index.scss';

export const GuildInfo = () => {
    return (
        <div className='guild-info-wrapper'>
            <AnimatedTitleCrossedUnderline titleSentence={['completely','trash']}/>
            <GuildBackground />
        </div>
    );
}