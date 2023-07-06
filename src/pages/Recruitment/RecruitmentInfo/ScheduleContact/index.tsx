import { scheduleContact } from "../../../../data/recruitment";
import { discordLink } from "../../../../constants/media";

import { GenericTitleInfo } from "../GenericTitleInfo";

export const ScheduleContact = () => {
    const discordListItem = <li>Join our <span onClick={()=>{window.open(discordLink)}}>DISCORD</span> server and contact one of the cT leaders or even the members.</li>
    return (
        <div className="info-container schedule-contact-container">
            <GenericTitleInfo title='Schedule & Contact' infoList={scheduleContact} optionalListItem={discordListItem}/>
        </div>
    );
}