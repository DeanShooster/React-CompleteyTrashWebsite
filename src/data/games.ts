import { fractalBingo, geoGuesser } from "../assets";

export const gamesAndFun: IGame[] = [
  {
    name: "Geo Guesser",
    source: "https://gw2-geoguesser.mael.tech/",
    image: geoGuesser,
    bgText:
      "Geoguessr, but in Tyria. A fun game of trying to guess on a map of Tyria where you think the current picture was taken - with daily, weekly, and monthly ranked challenges.",
  },
  {
    name: "FractalBingo",
    source: null,
    image: fractalBingo,
    bgText:
      "Doing daily fractals with your friends? After you finished your daily fractals with friends lets bingo it! Each person pulls a bingo card and the winner gets what at stakes! ",
    instructions: [
      "A bingo card has 3 rows and 3 columns. In each field there is a fractal event.",
      "The goal is to create a straight line between 3 fields similar to TicTacToe.",
      "After the fractal run each player yields a bingo card and marks the events that occurred. Afterwards the players check who got bingo and won the jackpot!",
      "Lastly each player can clipboard the card to the discord server so everyone can see the results.",
    ],
  },
];

export interface IGame {
  name: string;
  source: string | null;
  image: string;
  bgText: string;
  instructions?: string[];
}
