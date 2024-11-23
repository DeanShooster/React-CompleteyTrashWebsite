import { Alex, Dean, Khen, Kylio, Moon, Rik, Stein, Syndikat, Verone, Vertox } from "../assets";

export const guildMembers: IMember[] = [
  {
    name: "Dean",
    accountName: "Dean.3056",
    image: Dean,
    info: "Mentally unstable so be cautious when you approach. Loves to get naked when possible and wrestling in the mud with the boys.",
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
  {
    name: "Stein",
    accountName: "Steiner.8365",
    image: Stein,
    info: "4 digit ping enjoyer because im too poor to afford stable internet.",
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
    name: "Syndikat",
    accountName: "Syndikat.3178",
    image: Syndikat,
    info: "I don’t think of myself as an ugly person, I think of myself as a beautiful monkey.",
  },
  {
    name: "Khenarik",
    accountName: "Keledon.6134",
    image: Khen,
    info: "Embodiment of Lust, If you are a girl DM me.",
  },
  {
    name: "Alex",
    accountName: "Ssalg.1205",
    image: Alex,
    info: "I'm a legendary pokemon",
  },
  {
    name: "Rik",
    accountName: "rikje.8315",
    image: Rik,
    info: "Warrior main who knows how to wield a big sword. Bladesworn aficionado and action camera enthusiast.",
  },
];

export interface IMember {
  name: string;
  accountName: string;
  image: string;
  info: string;
}
