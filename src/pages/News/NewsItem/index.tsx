import { useNavigate } from "react-router";
import { INews } from "../../../data/news";
import { recordTarget, recordsPage } from "../../../constants/routing";

import { NewsDateFormat } from "../../../utils/string";

import "./index.scss";

interface INewsItem {
  news: INews;
}

export const NewsItem = ({ news }: INewsItem) => {
  const navigate = useNavigate();

  const recordsNavHandler = () => {
    if (news.recordName) navigate(`${recordsPage}?${recordTarget}=${news.recordName}`);
  };

  return (
    <div className="news-item-wrapper">
      <div className="date-type">
        <span>{NewsDateFormat(news.date.toDateString())}</span>
        <span>{news.type}</span>
      </div>
      <img alt="" src={news.image} className={news.type === "Record" ? "record-hover" : undefined} onClick={recordsNavHandler} />
      <div className="title-text">
        <h1>{news.title}</h1>
        <p>{news.text}</p>
      </div>
    </div>
  );
};
