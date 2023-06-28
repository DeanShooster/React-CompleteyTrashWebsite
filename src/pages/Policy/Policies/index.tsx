import { IPoliciesData, policies } from "../../../data/policy";
import { TitleIntroList } from "./TitleIntroList";

import './index.scss';

export const Policies = () => {
    return (
        <article className="policies-article">
            {policies.map((policy: IPoliciesData , index: number)=>{
                return <TitleIntroList key={index} data={policy}/>;
            })}
        </article>
    );
}