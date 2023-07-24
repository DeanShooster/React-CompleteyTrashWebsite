import { useState } from 'react';
import { IWing, wings } from '../../../data/records';

import { ArrowWingScreenController } from './ArrowWingScreenController';
import { WingIntro } from './WingIntro';
import { NumericWingScreenController } from './NumericWingScreenController';

import './index.scss';

export const WingScreen = () => {
    const [wing, setWing] = useState<IWing>(wings[0]);
    return (
        <section className={`wing-screen-container ${wing.name}`}>
            <ArrowWingScreenController wingData={wing} setWing={setWing}/>
            <WingIntro wingData={wing}/>
            <NumericWingScreenController wingData={wing} setWing={setWing}/>
        </section>
    );
}