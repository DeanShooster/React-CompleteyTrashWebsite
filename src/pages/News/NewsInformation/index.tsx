import { useOutletContext } from "react-router";

import { INews } from "../../../data/news";

import './index.scss';

export const NewsInformation = () => {
    const news: INews = useOutletContext();

    console.log(news);

    return (
        <section>
            testing...
        </section>
    );
}