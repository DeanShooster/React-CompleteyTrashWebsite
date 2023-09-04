import {useState,useEffect} from 'react';

import { INews } from "../../../data/news";

import './index.scss';

interface INewsInformation{
    news: INews;
    closeNewsItem: Function;
}

export const NewsInformation = ({news , closeNewsItem} : INewsInformation) => {
    const [newsComponent,setNewsComponent] = useState<React.ReactNode | null>(null);

    useEffect(()=>{
        switch(news.type){
            case 'Record':{
                break;
            }
            default: {
                break;
            }
        }
    },[news.type])

    return (
        <div className="news-information-wrapper">
            <div className="close-news-wrapper">
                <div onClick={()=>closeNewsItem()}>X</div>
            </div>
            <section>
                {newsComponent}
            </section>
        </div>
    );
}