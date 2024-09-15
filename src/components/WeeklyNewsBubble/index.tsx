import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { newsPage } from "../../constants/routing";
import { ctNews } from "../../constants/general";
import { newsData } from "../../data/news";

import "./index.scss";
import { ArrowRight, OrangeExclamation, Screen1, WING1, WING2, WING3, WING4, WING5, WING6, WING7 } from "../../assets";
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

  const screenImage = [
    {
      title: "Wing 1",
      image: WING1,
    },
    {
      title: "Wing 2",
      image: WING2,
    },
    {
      title: "Wing 3",
      image: WING3,
    },
    {
      title: "Wing 4",
      image: WING4,
    },
    {
      title: "Wing 5",
      image: WING5,
    },
    {
      title: "Wing 6",
      image: WING6,
    },
    {
      title: "Wing 7",
      image: WING7,
    },
  ];

  const screen = screenImage.find((el) => el.title === localStorage.getItem(ctNews))?.image;

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
            <img alt="" src={screen ? screen : Screen1} />
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
