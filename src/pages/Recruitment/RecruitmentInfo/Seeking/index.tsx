
import { seeking } from "../../../../data/recruitment";
import { GenericTitleInfo } from "../GenericTitleInfo";

import { Deadeye } from "../../../../assets";

export const Seeking = () => {
    return (
        <div className='info-container seeking-container'>
            <GenericTitleInfo title='What are we seeking?' infoList={seeking}/>
            <img alt='' src={Deadeye}/>
        </div>
    );
}