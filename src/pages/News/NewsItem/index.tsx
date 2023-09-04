import { INews } from "../../../data/news";

import { NewsDateFormat } from "../../../utils/string";

import './index.scss';

interface INewsItem{
    news: INews;
    setNewsItem: Function;
}

export const NewsItem = ({news,setNewsItem} : INewsItem) => {
    return (
        <div className="news-item-wrapper">
            <div className="date-type">
                <span>{NewsDateFormat(news.date.toDateString())}</span>
                <span>{news.type}</span>
            </div>
            <img alt='' src={news.image} onClick={()=>setNewsItem(news)}/>
            <div className="title-text">
                <h1>{news.title}</h1>
                <p>{news.text}</p>
            </div>
        </div>
    );
}