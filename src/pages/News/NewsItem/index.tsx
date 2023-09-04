import { useNavigate } from "react-router";
import { INews } from "../../../data/news";

import { NewsDateFormat } from "../../../utils/string";
import { newsPage } from "../../../constants/routing";

import './index.scss';

interface INewsItem{
    news: INews;
    setNewsItem: Function;
}

export const NewsItem = ({news,setNewsItem} : INewsItem) => {
    const navigate = useNavigate();

    const newsItemHandler = () => {
        setNewsItem(news);
        navigate(`${newsPage}/${news.title}`);
    }

    return (
        <div className="news-item-wrapper">
            <div className="date-type">
                <span>{NewsDateFormat(news.date.toDateString())}</span>
                <span>{news.type}</span>
            </div>
            <img alt='' src={news.image} onClick={newsItemHandler}/>
            <div className="title-text">
                <h1>{news.title}</h1>
                <p>{news.text}</p>
            </div>
        </div>
    );
}