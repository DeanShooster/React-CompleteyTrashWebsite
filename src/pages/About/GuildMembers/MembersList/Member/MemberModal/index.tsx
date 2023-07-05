import { useRef , useEffect} from 'react';
import { IMember } from '../../../../../../data/guildMembers';

import { BackgroundWall } from '../../../../../../components/BackgroundWall';

import './index.scss';

interface IMemberModal{
    data: IMember;
    closeModal: Function;
}

export const MemberModal = ({data,closeModal}:IMemberModal) => {

    const bgMemberModalRef = useRef<any>();

    useEffect(()=>{
        const clickOutsideHandler = (event: any) => {
            if(bgMemberModalRef?.current && bgMemberModalRef?.current?.contains(event.target)) closeModal();
        }
        window.addEventListener('click',clickOutsideHandler);
        return ()=> window.removeEventListener('click',clickOutsideHandler);
    },[closeModal])

    return (
        <>
            <BackgroundWall bgRef={bgMemberModalRef}/>
            <div className='member-modal-card' >
                <div className='member-picture-container'>
                    <img alt='' src={data.image}/>
                </div>
                <div className='member-info-container'>
                    <h1>{data.name}</h1>
                    <p>{data.info}</p>
                    <h2>{data.accountName}</h2>
                </div>
                <div className='close-member-modal' onClick={()=>closeModal()}>X</div>
            </div>
        </>
    );
}