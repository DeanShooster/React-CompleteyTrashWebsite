import { Broc, Creep, Dean, Draz, Kylio, Moon, Nerd, Stein, Verone, Vertox } from "../assets";

export const guildMembers: IMember[] = [
  {
    name: "Dean",
    accountName: "Dean.3056",
    image: Dean,
    info: "cT guild leader. Mentally unstable so be cautious when you approach. Loves to get naked when possible and wrestling in the mud butt naked.",
  },
  {
    name: "Moon",
    accountName: "MoonMoon.3826",
    image: Moon,
    info: "Thumbnail expert, anime addict, and low men enjoyer.",
  },
  {
    name: "Kylio",
    accountName: "Pelda.1896",
    image: Kylio,
    info: "I could not think of anything clever to say :( because I'm empty inside.",
  },
  // {
  //   name: "Creep",
  //   accountName: "ThaCreep.1705",
  //   image: Creep,
  //   info: "Mesmer enjoyer, completionist/achievement whore, button presser, meme lord and completely trash in everything(according to Dean).",
  // },
  {
    name: "Draz",
    accountName: "onepiece.2874",
    image: Draz,
    info: "Low FPS and high loading time gamer that still tries to be good and enjoy hard content while listening to death metal.",
  },
  {
    name: "Stein",
    accountName: "Steiner.8365",
    image: Stein,
    info: "4 digit ping enjoyer because im too poor to afford stable internet.",
  },
  {
    name: "Nerdcore",
    accountName: "Seilies.1759",
    image: Nerd,
    info: "Hardest part of joining a static is to write an introduction: Albert Einstein.",
  },
  {
    name: "Vertox",
    accountName: "Vertox.3697",
    image: Vertox,
    info: "Elementalist enjoyer (especially weaver), on-and-off sPvP enthusiast, conjure hater and gift of exploration farming masochist.",
  },
  {
    name: "Verone",
    accountName: "Verone.7652",
    image: Verone,
    info: "Ara Ara",
  },
  {
    name: "Broc",
    accountName: "Xeros The Mighty.4765",
    image: Broc,
    info: "All grandmas love me",
  },
];

export interface IMember {
  name: string;
  accountName: string;
  image: string;
  info: string;
}
