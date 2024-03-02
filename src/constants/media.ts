import {
  Blish,
  Deadeye,
  Discord,
  FireBrand,
  HSLogo,
  Mesmer,
  Reddit,
  Renegade,
  SCLogo,
  Screen1,
  Screen2,
  Screen3,
  SpellBreaker,
  Untamed,
  Weaver,
  WingmanLogo,
  YouTube,
} from "../assets";
import { IAddonsData, arcDPS, blish, boonTable, clears, healingStats, kpme, logUploader, mechanicLogs } from "../data/addons";

// Interfaces
export interface IMedia {
  name: string;
  url: string;
  image: string;
}
export interface IAddon extends IMedia {
  data: IAddonsData;
}

// 3rd Party Media Links
export const discordLink = "https://discord.gg/H4ZcUT8dw2";
export const YouTubeLink = "https://www.youtube.com/channel/UCYQBj51yfa6pKWWId3O_tWQ/videos";
export const RedditLink = "https://www.reddit.com/user/Completely__Trash";
export const speedRun = "https://www.speedrun.com/gw2";
export const raidLeague = "https://gw2raidleague.com/";
export const snowCrows = "https://snowcrows.com";
export const hardStuck = "https://hardstuck.gg";
export const wingman = "https://gw2wingman.nevermindcreations.de/home";
export const wingmanRecords = "https://gw2wingman.nevermindcreations.de/records";
export const addonVideoGuide = "https://www.youtube-nocookie.com/embed/eIf1CBb365M";
export const advancedAddonVideoGuide = "https://www.youtube-nocookie.com/embed/7DfU76Q6viE";

// Media Sources { name , url , image }
export const mediaLinks: IMedia[] = [
  { name: "Discord", url: discordLink, image: Discord },
  { name: "YouTube", url: YouTubeLink, image: YouTube },
  { name: "Reddit", url: RedditLink, image: Reddit },
];
export const homePageScreens: IMedia[] = [
  { name: "Competitive Records", url: speedRun, image: Screen1 },
  { name: "Wingman", url: wingmanRecords, image: Screen2 },
  { name: "Raid League", url: raidLeague, image: Screen3 },
];
export const homePageOtherWebsites: IMedia[] = [
  { name: "Snow Crows", url: snowCrows, image: SCLogo },
  { name: "Hardstuck", url: hardStuck, image: HSLogo },
  { name: "Wingman", url: wingman, image: WingmanLogo },
];
export const addonLinks: IAddon[] = [
  { name: "arcDPS", url: "https://www.deltaconnected.com/arcdps", image: Weaver, data: arcDPS },
  { name: "Boon Table", url: "https://github.com/knoxfighter/GW2-ArcDPS-Boon-Table", image: FireBrand, data: boonTable },
  { name: "Mechanics Log", url: "https://github.com/knoxfighter/GW2-ArcDPS-Mechanics-Log", image: Mesmer, data: mechanicLogs },
  { name: "Log Uploader", url: "https://github.com/nbarrios/arcdps-uploader", image: Renegade, data: logUploader },
  { name: "Killproof.me", url: "https://github.com/knoxfighter/arcdps-killproof.me-plugin", image: Deadeye, data: kpme },
  { name: "Clears", url: "https://github.com/gw2scratch/arcdps-clears", image: SpellBreaker, data: clears },
  { name: "Healing Stats", url: "https://github.com/Krappa322/arcdps_healing_stats", image: Untamed, data: healingStats },
  { name: "Blish", url: "https://blishhud.com", image: Blish, data: blish },
];
