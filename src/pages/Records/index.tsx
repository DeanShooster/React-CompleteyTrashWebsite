import { useRef, useState, useEffect } from 'react';
import { useTitle } from '../../hooks/useTitle';
import { recordsPage } from '../../constants/routing';

import { WingStrikeScreen } from './WingScreen';
import { WingStrikeRecords } from './WingRecords';

import './index.scss';

export const Records = () => {

    useTitle(recordsPage);

    const [wingStrikeRecords,setWingStrikeRecords] = useState<string>('');
    const recordsRef = useRef<any>(null);

    useEffect(()=>{recordsRef.current?.scrollIntoView();},[])
    const scrollToRecord = () => setTimeout(() => { window.scrollTo( { top: recordsRef?.current?.offsetTop ? recordsRef?.current?.offsetTop - 150 : 0, behavior: 'smooth' }) }, 50);

    return (
        <>
            <section className="records-page">
                <WingStrikeScreen setWingStrikeRecords={setWingStrikeRecords} scrollToRecord={scrollToRecord}/>
                <WingStrikeRecords wingStrikeRecords={wingStrikeRecords} recordsRef={recordsRef}/>
            </section>
        </>
    );
}