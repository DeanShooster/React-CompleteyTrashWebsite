import { trial, trialSubTitle } from "../../../../data/recruitment";

import { GenericTitleInfo } from "../GenericTitleInfo";

import { SpellBreaker } from "../../../../assets";

export const Trial = () => {
    return (
        <div className="info-container trial-container">
            <img alt='' src={SpellBreaker}/>
            <GenericTitleInfo title='Trial Period' subTitle={trialSubTitle} infoList={trial}/>
        </div>
    );
}