import { IBSStrike, Screen1, WING2, WING4 } from "../assets";


export const newsData : INews[] = [
    {
        type: 'Record',
        title: 'IBS Strike',
        text: 'Fraenir of Jormag DUO in 4:34',
        image: IBSStrike,
        date: new Date(2023,7,22),
        data: null
    },
    {
        type: 'Record',
        title: 'Wing 2',
        text: 'Full Wing 5 Men in 17:18',
        image: WING2,
        date: new Date(2023,7,18),
        data: null
    },
    {
        type: 'Announcement',
        title: 'cT Records Page',
        text: 'Records Page has been added with follow links to Reddit, YouTube and Logs',
        image: Screen1,
        date: new Date(2023,7,9),
        data: null
    },
    {
        type: 'Record',
        title: 'Wing 4 MO',
        text: 'Mursaat Overseer TRIO in 4:21',
        image: WING4,
        date: new Date(2023,7,8),
        data: null
    },
    {
        type: 'Announcement',
        title: 'cT News Page',
        text: 'News Page has been added regarding updates, records, announcement and general news',
        image: Screen1,
        date: new Date(2023,6,28),
        data: null
    },
];

export type NewsType = 'Update' | 'Record' | 'Announcement' | 'News';

export interface INews{
    type: NewsType;
    title: string;
    text: string;
    image: string;
    date: Date;
    data: any;
}