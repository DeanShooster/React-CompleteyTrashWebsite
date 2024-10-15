import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { newsPage } from "../../constants/routing";
import { ctNews } from "../../constants/general";
import { newsData } from "../../data/news";

import "./index.scss";
import { ArrowRight, OrangeExclamation } from "../../assets";
import { BackgroundWall } from "../BackgroundWall";

export const WeeklyNewsBubble = () => {
  const navigate = useNavigate();
  const [showBubble, setShowBubble] = useState<boolean>(false);

  useEffect(() => {
    const lastRead = localStorage.getItem(ctNews);
    if (lastRead) {
      if (lastRead === newsData[0].title) setShowBubble(false);
      else setShowBubble(true);
    } else setShowBubble(true);
  }, []);

  const readNewsHandler = () => {
    localStorage.setItem(ctNews, newsData[0].title);
    setShowBubble(false);
    navigate(newsPage);
  };

  return (
    <>
      {showBubble ? (
        <>
          <BackgroundWall />
          <div className="weekly-news-bubble">
            <div>
              <img alt="" src={OrangeExclamation} />
              <h1>Something New</h1>
              <img alt="" src={OrangeExclamation} />
            </div>
            <img alt="" src={newsData[0]?.image} />
            <div>
              <img alt="" src={ArrowRight} className="arrow-juggle" />
              <button onClick={readNewsHandler}>News Page</button>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};
