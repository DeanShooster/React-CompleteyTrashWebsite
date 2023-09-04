
import { AnimatedTitleHeader } from '../../../components/AnimatedTitleHeader';

import './index.scss';

export const Title = () => {
    return (
        <div className='news-title'>
            <AnimatedTitleHeader title='News'/>
            <p><span>Latest News: </span>Announcements, Updates, Records and General News.</p>
        </div>
    );
}