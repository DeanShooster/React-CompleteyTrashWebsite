import { useState } from 'react';
import { IEncounter, encounter } from '../../../data/records';

import { ArrowWingScreenController } from './ArrowWingScreenController';
import { WingStrikeIntro } from './WingIntro';
import { NumericWingScreenController } from './NumericWingScreenController';

import './index.scss';

interface IWingScreen{
    setWingStrikeRecords: Function;
    scrollToRecord: Function;
}

export const WingStrikeScreen = ({setWingStrikeRecords , scrollToRecord}: IWingScreen) => {
    const [encounterStrike, setEncounter] = useState<IEncounter>(encounter[0]);
    return (
        <section className={`wing-strike-screen-container ${encounterStrike.name.replace(' ','-').toLocaleLowerCase()}`}>
            <ArrowWingScreenController wingStrikeData={encounterStrike} setEncounter={setEncounter}/>
            <WingStrikeIntro wingStrikeData={encounterStrike} setWingStrikeRecords={setWingStrikeRecords} scrollToRecord={scrollToRecord}/>
            <NumericWingScreenController wingStrikeData={encounterStrike} setEncounter={setEncounter}/>
        </section>
    );
}