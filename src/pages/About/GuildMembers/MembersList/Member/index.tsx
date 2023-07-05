import {useState} from 'react';
import { IMember } from "../../../../../data/guildMembers";

import './index.scss';
import { MemberModal } from './MemberModal';

interface ISingleMember{
    data: IMember
}

export const SingleMember = ({data}: ISingleMember) => {
    const [showMemberModal,setShowMemberModal] = useState<boolean>(false);

    const modalHandler = (close? : boolean) => {
        if(close) setShowMemberModal(false);
        else setShowMemberModal(true)
    }

    return (
        <>
            <div className="member-wrapper" onClick={()=>modalHandler()}>
                <img alt='' src={data.image}/>
                <span>{data.name}</span>
            </div>
            {showMemberModal && <MemberModal data={data} closeModal={()=>modalHandler(true)}/>}
        </>
    );
}