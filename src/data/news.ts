import { IBSStrike, Screen1, WING1, WING2, WING4, WING5 } from "../assets";

export const newsData: INews[] = [
  {
    type: "Record",
    title: "Wing 4",
    text: "Full Wing 5 Men in 18:53",
    image: WING4,
    date: new Date(2023, 10, 4),
  },
  {
    type: "Record",
    title: "Soulless Horror Speedrun",
    text: "Scourge abuse speedrun with LN,qT & Friends. 1:26 Kill time.",
    image: WING5,
    date: new Date(2023, 8, 26),
  },
  {
    type: "Record",
    title: "Vale Guardian Lowmen",
    text: "Vale Guardian 3 Men in 5:31",
    image: WING1,
    date: new Date(2023, 8, 24),
  },
  {
    type: "Update",
    title: "Weekly News Bubble",
    text: "Added a news announcer bubble when there is an update.",
    image: Screen1,
    date: new Date(2023, 8, 23),
  },
  {
    type: "Record",
    title: "IBS Strikes",
    text: "IBS Full Clear DUO",
    image: IBSStrike,
    date: new Date(2023, 8, 22),
  },
  {
    type: "Record",
    title: "IBS Strike",
    text: "Fraenir of Jormag DUO in 4:34",
    image: IBSStrike,
    date: new Date(2023, 7, 22),
  },
  {
    type: "Record",
    title: "Wing 2",
    text: "Full Wing 5 Men in 17:18",
    image: WING2,
    date: new Date(2023, 7, 18),
  },
  {
    type: "Announcement",
    title: "cT Records Page",
    text: "Records Page has been added with follow links to Reddit, YouTube and Logs",
    image: Screen1,
    date: new Date(2023, 7, 9),
  },
  {
    type: "Record",
    title: "Wing 4 MO",
    text: "Mursaat Overseer TRIO in 4:21",
    image: WING4,
    date: new Date(2023, 7, 8),
  },
  {
    type: "Announcement",
    title: "cT News Page",
    text: "News Page has been added regarding updates, records, announcement and general news",
    image: Screen1,
    date: new Date(2023, 6, 28),
  },
];

export type NewsType = "Update" | "Record" | "Announcement" | "News";

export interface INews {
  type: NewsType;
  title: string;
  text: string;
  image: string;
  date: Date;
}
