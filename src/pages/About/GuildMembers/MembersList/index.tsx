import { IMember } from "../../../../data/guildMembers";

import { SingleMember } from "./Member";

import './index.scss';

interface IMembersList{
    members: IMember[];
}

export const MembersList = ({members} : IMembersList) => {
    return (
        <div className="members-list-container">
            <div className="bg-filter-wall"></div>
            {members.map((member: IMember , index: number)=>{
                return <SingleMember key={index} data={member}/>
            })}
        </div>
    );
}