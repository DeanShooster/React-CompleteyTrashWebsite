import { fractalBingo, geoGuesser } from "../assets";

export const gamesAndFun: IGame[] = [
    {
        name: 'Geo Guesser',
        source: 'https://gw2-geoguesser.mael.tech/',
        image: geoGuesser,
        bgText: 'Geoguessr, but in Tyria. A fun game of trying to guess on a map of Tyria where you think the current picture was taken - with daily, weekly, and monthly ranked challenges.'
    },
    {
        name: 'Fractal Bingo',
        source: null,
        image: fractalBingo,
        bgText: 'Doing daily fractals with your friends? After you finished your daily fractals with friends lets bingo it! Each person pulls a bingo card and the winner gets what at stakes! '
    }
];

export interface IGame{
    name: string;
    source: string | null;
    image: string;
    bgText: string;
}