import { useEffect, useState } from 'react';
import { guildMembers } from '../../../data/guildMembers';

import { MembersList } from './MembersList';
import { Loader } from '../../../components/Loader';

import './index.scss';
import { AnimatedTitleHeader } from '../../../components/AnimatedTitleHeader';

export const GuildMembers = () => {

    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{ 
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    },[]);

    return (
        <section className='guild-members-container'>
            <AnimatedTitleHeader title='Guild Members'/>
            {isLoading ? <Loader /> : <MembersList members={guildMembers}/>}
        </section>
    );
}