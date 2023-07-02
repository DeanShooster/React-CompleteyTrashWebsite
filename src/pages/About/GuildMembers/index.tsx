import { useEffect, useState } from 'react';
import { guildMembers } from '../../../data/guildMembers';

import { MembersList } from './MembersList';
import { Loader } from '../../../components/Loader';

import './index.scss';

export const GuildMembers = () => {

    const [isLoading,setIsLoading] = useState(true);

    useEffect(()=>{ 
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    },[]);

    return (
        <section className='guild-members-container'>
            <h1>Guild Members</h1>
            {isLoading ? <Loader /> : <MembersList members={guildMembers}/>}
        </section>
    );
}