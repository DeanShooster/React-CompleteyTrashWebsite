
import { Seeking } from './Seeking';
import { Trial } from './Trial';
import { ScheduleContact } from './ScheduleContact';

import './index.scss';
import { BackgroundImage } from '../../../components/BackgroundImage';
import { ThemeBG } from '../../../assets';

interface IRecruitmentInfo{
    recruitInfoRef: any;
}

export const RecruitmentInfo = ({recruitInfoRef}: IRecruitmentInfo) => {
    return (
        <section className='recruitment-info-container' ref={recruitInfoRef}>
            <Seeking />
            <Trial />
            <ScheduleContact />
            <BackgroundImage image={ThemeBG} style={{filter: 'brightness(50%)'}}/>
        </section>
    );
}