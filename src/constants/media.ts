import { Discord, HSLogo, Reddit, SCLogo, Screen1, Screen2, Screen3, YouTube } from "../assets";
import { IAddonsData, arcDPS, blish, boonTable, clears, healingStats, kpme, logUploader, mechanicLogs } from "../data/addons";

// Interfaces
export interface IMedia{
    name: string;
    url: string;
    image: string;
};
export interface IAddon extends IMedia{
    data: IAddonsData
}

// 3rd Party Media Links
export const discordLink = 'https://discord.gg/H4ZcUT8dw2';
export const YouTubeLink = 'https://www.youtube.com/channel/UCYQBj51yfa6pKWWId3O_tWQ/videos';
export const RedditLink = 'https://www.reddit.com/user/Completely__Trash';
export const speedRun = 'https://www.speedrun.com/gw2';
export const raidLeague = 'https://gw2raidleague.com/';
export const snowCrows = 'https://snowcrows.com';
export const hardStuck = 'https://hardstuck.gg';
export const addonVideoGuide = 'https://www.youtube-nocookie.com/embed/eIf1CBb365M';

// Media Sources { name , url , image }
export const mediaLinks: IMedia[] = [
    { name: 'Discord' , url: discordLink , image: Discord },
    { name: 'YouTube' , url: YouTubeLink , image: YouTube },
    { name: 'Reddit' , url: RedditLink , image: Reddit }
];
export const homePageScreens: IMedia[] = [
    { name: 'Competitive Records', url: speedRun , image: Screen1 },
    { name: 'Join Our Discord', url: discordLink , image: Screen2 },
    { name: 'Raid League', url: raidLeague , image: Screen3 }
];
export const homePageOtherWebsites: IMedia[] = [
    { name: 'Snow Crows' , url: snowCrows , image: SCLogo },
    { name: 'Hardstuck' , url: hardStuck , image: HSLogo }
];
export const addonLinks: IAddon[] = [
    { name: 'arcDPS' , url: 'https://www.deltaconnected.com/arcdps' , image: '' , data: arcDPS },
    { name: 'Boon Table' , url: 'https://github.com/knoxfighter/GW2-ArcDPS-Boon-Table' , image: '',data: boonTable },
    { name: 'Mechanics Log' , url: 'https://github.com/knoxfighter/GW2-ArcDPS-Mechanics-Log' , image: '',data: mechanicLogs },
    { name: 'Log Uploader' , url: 'https://github.com/nbarrios/arcdps-uploader' , image: '', data: logUploader },
    { name: 'Killproof.me' , url: 'https://github.com/knoxfighter/arcdps-killproof.me-plugin' , image: '', data: kpme },
    { name: 'Clears' , url: 'https://github.com/gw2scratch/arcdps-clears' , image: 'https://github.com/gw2scratch/arcdps-clears', data: clears },
    { name: 'Healing Stats' , url: 'https://github.com/Krappa322/arcdps_healing_stats' , image: '', data: healingStats },
    { name: 'Blish' , url: 'https://blishhud.com' , image: '', data: blish}
];