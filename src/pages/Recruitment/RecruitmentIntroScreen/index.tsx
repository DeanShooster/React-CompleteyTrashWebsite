
import { GlowingTitle } from '../../../components/GlowingTitle';

import './index.scss';
import { RecruitmentBG } from '../../../assets';

interface IRecruitmentIntroScreen{
    showRecruitmentInfo: Function;
    showRecruitButton: boolean;
    scrollToSeek: Function;
}

export const RecruitmentIntroScreen = ({showRecruitmentInfo,showRecruitButton,scrollToSeek} : IRecruitmentIntroScreen) => {

    const recruitMeHandler = () =>{ showRecruitmentInfo(true); scrollToSeek(); }

    return (
        <div className='recruitment-intro-screen-container'>
            <img alt='' src={RecruitmentBG} loading='lazy'/>
            <div className='recruitment-intro'>
                <GlowingTitle aboveTitle='Recruitment' title='Completely Trash' subTitle='Hardcore Raid/Strike guild'/>
                <p>Welcome to the Recruitment page</p>
                <p>Make sure you read thoroughly the next page and understand our requirements.</p>
                {!showRecruitButton && <span className='recruit-me' onClick={recruitMeHandler}>RECRUIT ME</span> }
            </div>
        </div>
    );
}