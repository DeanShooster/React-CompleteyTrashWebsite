import { IBSStrike, SOTOStrike, Screen1, WING1, WING2, WING4, WING5, WING7 } from "../assets";

export const newsData: INews[] = [
  {
    type: "Record",
    title: "Wing 4",
    text: "Samarog 4 Men in 7:46",
    image: WING4,
    date: new Date(2023, 11, 2),
    recordName: "4",
  },
  {
    type: "Record",
    title: "SOTO Strike",
    text: "Temple of Febe - Cerus by 4 Men in 8:41",
    image: SOTOStrike,
    date: new Date(2023, 10, 27),
    recordName: "SOTO",
  },
  {
    type: "Record",
    title: "Wing 7",
    text: "Full Wing 5 Men in 26:23",
    image: WING7,
    date: new Date(2023, 10, 25),
    recordName: "7",
  },
  {
    type: "Record",
    title: "SOTO Strike",
    text: "DUO Cosmic Observatory in 17:18",
    image: SOTOStrike,
    date: new Date(2023, 10, 22),
    recordName: "SOTO",
  },
  {
    type: "Record",
    title: "SOTO Strike",
    text: "Solo Cosmic Observatory in 47:30",
    image: SOTOStrike,
    date: new Date(2023, 10, 18),
    recordName: "SOTO",
  },
  {
    type: "Update",
    title: "Clickable News Records",
    text: "News records are now clickable and will navigate to the records page to the corresponding wing or strike.",
    image: Screen1,
    date: new Date(2023, 10, 7),
  },
  {
    type: "Record",
    title: "Wing 4",
    text: "Full Wing 5 Men in 18:53",
    image: WING4,
    date: new Date(2023, 10, 4),
    recordName: "4",
  },
  {
    type: "Record",
    title: "Soulless Horror Speedrun",
    text: "Scourge abuse speedrun with LN,qT & Friends. 1:26 Kill time.",
    image: WING5,
    date: new Date(2023, 8, 26),
    recordName: "5",
  },
  {
    type: "Record",
    title: "Vale Guardian Lowmen",
    text: "Vale Guardian 3 Men in 5:31",
    image: WING1,
    date: new Date(2023, 8, 24),
    recordName: "1",
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
    recordName: "IBS",
  },
  {
    type: "Record",
    title: "IBS Strike",
    text: "Fraenir of Jormag DUO in 4:34",
    image: IBSStrike,
    date: new Date(2023, 7, 22),
    recordName: "IBS",
  },
  {
    type: "Record",
    title: "Wing 2",
    text: "Full Wing 5 Men in 17:18",
    image: WING2,
    date: new Date(2023, 7, 18),
    recordName: "2",
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
    recordName: "4",
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
  recordName?: string;
}
