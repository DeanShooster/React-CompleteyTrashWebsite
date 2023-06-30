import { Discord, HSLogo, Reddit, SCLogo, Screen1, Screen2, Screen3, YouTube } from "../assets";

// Interfaces
export interface IMedia{
    name: string;
    url: string;
    image: string;
};

// 3rd Party Media Links
export const discordLink = 'https://discord.gg/H4ZcUT8dw2';
export const YouTubeLink = 'https://www.youtube.com/channel/UCYQBj51yfa6pKWWId3O_tWQ/videos';
export const RedditLink = 'https://www.reddit.com/user/Completely__Trash';
export const speedRun = 'https://www.speedrun.com/gw2';
export const raidLeague = 'https://gw2raidleague.com/';
export const snowCrows = 'https://snowcrows.com';
export const hardStuck = 'https://hardstuck.gg';

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