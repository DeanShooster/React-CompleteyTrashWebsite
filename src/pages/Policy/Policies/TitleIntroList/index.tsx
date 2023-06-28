import { IPoliciesData } from "../../../../data/policy";

import './index.scss';

interface ITitleIntroList{
    data: IPoliciesData;
}

export const TitleIntroList = ({data}: ITitleIntroList) => {
    return (
        <div className="policy-wrapper">
            <div className="sliced-title-wrapper">
                <div className="top">{data.title}</div>
                <div className="bottom">{data.title}</div>
            </div>
            <p>{data.intro}</p>
            <ul>
                {data.list.map((policy: string, index: number)=>{
                    return <li key={index}>{policy}</li>;
                })}
            </ul>
        </div>
    );
}