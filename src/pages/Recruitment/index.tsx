import { useEffect, useRef, useState } from 'react';

import { RecruitmentIntroScreen } from './RecruitmentIntroScreen';
import { RecruitmentInfo } from './RecruitmentInfo';

import './index.scss';

export const Recruitment = () => {

    const [showRecruitmentInfo,setRecruitmentInfo] = useState<boolean>(false);
    const recruitmentPageRef = useRef<HTMLElement | null>(null);
    const seekingRef = useRef<HTMLElement | null>(null);

    useEffect(()=> { recruitmentPageRef.current?.scrollIntoView();},[] );
    const scrollToSeek = () => setTimeout(() => { window.scrollTo( { top: seekingRef?.current?.offsetTop ? seekingRef?.current?.offsetTop - 150 : 0, behavior: 'smooth' }) }, 50);

    return (
        <section className="recruitment-page" ref={recruitmentPageRef}>
            <RecruitmentIntroScreen showRecruitmentInfo={setRecruitmentInfo} showRecruitButton={showRecruitmentInfo} scrollToSeek={scrollToSeek}/>
            {showRecruitmentInfo && <RecruitmentInfo recruitInfoRef={seekingRef}/>}
        </section>
    );
}