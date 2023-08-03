import { useOutletContext } from "react-router";
import { IAddonsData } from "../../../data/addons";

import { StarRating } from "./StarRating";

import './index.scss';

interface IAddonInformation{
    name: string;
    image: string;
    url: string;
    data: IAddonsData;
}

export const AddonInformation = () => {
    const addon: IAddonInformation = useOutletContext();
    return (
        <section className="addon-information-container">
            <div className="addon-information-wrapper">
                <div className="addon-title">
                    <h1>{addon.name}</h1>
                    <StarRating rating={addon.data.popular}/>
                </div>
                <p>{addon.data.summarize}</p>
                <hr/>
                <ul>
                    {addon.data.pointers.map((pointer: string, index: number)=>{
                        return <li key={index}>{pointer}</li>
                    })}
                </ul>
                <button onClick={()=>window.open(addon.url)}>{addon.name}</button>
            </div>
            <div className="addon-information-image-wrapper">
                <img alt='' src={addon.image}/>
            </div>
        </section>
    );
}