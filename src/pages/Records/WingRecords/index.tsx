import { useState,useEffect,Fragment } from 'react';
import { IBossesRecords, IWingDataRecords, wingRecordsData } from '../../../data/records';

import { Record } from './Record';

import './index.scss';
import { BackgroundImage } from '../../../components/BackgroundImage';
import { ThemeBG } from '../../../assets';
import { LineDivider } from './LineDivider';
import { AnimatedTitleHeader } from '../../../components/AnimatedTitleHeader';

interface IWingRecords{
    wingStrikeRecords: string;
    recordsRef: any;
}

export const WingStrikeRecords = ({wingStrikeRecords,recordsRef} : IWingRecords) => {

    const [records,setRecords] = useState<IWingDataRecords | undefined>();

    useEffect(()=>{
        setRecords(wingRecordsData.find((wing:IWingDataRecords) => wing.name === wingStrikeRecords))
    },[wingStrikeRecords]);

    return (
        <>
            {records &&
                <section className='wing-records-container' ref={recordsRef}>
                    <BackgroundImage image={ThemeBG} style={{filter: 'brightness(50%)'}}/>
                    <div className='wing-records-wrapper'>
                        <AnimatedTitleHeader title={records.name} style={{textAlign: 'center'}}/>
                        <Record title='Full Wing' records={records.fullWing}/>
                        {records.fullWing.length > 0 && <LineDivider />}
                        {records.bosses.map((boss: IBossesRecords,index: number)=>{
                            return (
                                <Fragment key={index}>
                                    <Record title={boss.name} records={boss.records}/>
                                    {records.bosses[index].records.length > 0 && index < records.bosses.length && <LineDivider />}
                                </Fragment>
                            );
                        })}
                    </div>
                </section>
            }
        </>
    );
}