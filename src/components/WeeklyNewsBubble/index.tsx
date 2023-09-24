import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { newsPage } from "../../constants/routing";
import { ctNews } from "../../constants/general";
import { newsData } from "../../data/news";

import "./index.scss";

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
        <div className="weekly-news-bubble" onClick={readNewsHandler}>
          <span>Something new! Click Me!</span>
        </div>
      ) : null}
    </>
  );
};
