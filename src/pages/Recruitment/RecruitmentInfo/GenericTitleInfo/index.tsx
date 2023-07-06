import { AnimatedTitleHeader } from "../../../../components/AnimatedTitleHeader";

interface IGenericTitleInfo{
    title: string;
    subTitle?: string;
    infoList: string[];
    optionalListItem?: React.ReactNode;
}

export const GenericTitleInfo = ({title,subTitle ,infoList , optionalListItem} : IGenericTitleInfo) => {
    return (
        <div>
        <AnimatedTitleHeader title={title}/>
        {subTitle && <p>{subTitle}</p>}
        <ul>
            {infoList.map((info: string, index: number)=> {return <li key={index}>{info}</li>})}
            {optionalListItem}
        </ul>
    </div>
    );
}