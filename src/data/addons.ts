
export interface IAddonsData{
    pointers: string[];
    summarize: string;
    popular: number;
}

export const arcDPS: IAddonsData = {
    pointers: [
        'arcDPS is a real time DPS meter which works in PVE and WvW which tracks your own DPS and your group DPS. The DPS could be shown in different categories such as: Cleave, Direct boss damage , Total damage or Percentage.',
        'arcDPS is called a DPS meter but it has much more to it. It can show crowd control, area graphs, general stats counter for downs,cleanse,res and ETC.',
        'One of the best functionality is the arcDPS logs which can be converted to something more visually relying on DPS REPORTS and can be read after an encounter with an advanced visualization of the fight and various data.',
    ],
    summarize: 'This is the most used addon by players as it gives the ability to see improvement / comparison to other players.',
    popular: 5
};
export const boonTable: IAddonsData = {
    pointers: [
        'Boon Table is an addon which applies on arcDPS as an extension.',
        'Boon Table is a real time Boon Meter which works in PVE and WvW which tracks the party/squad boon application during the encounter.',
        'It is a great feature that precisely shows the boon uptime and easily detect if a specific boon is missing and by whom.'
    ],
    summarize: 'This is a popular addon and mostly used by experienced groups in order to optimize boons.',
    popular: 5
};
export const mechanicLogs: IAddonsData = {
    pointers: [
        'Mechanic log is an addon which applies on arcDPS as an extension.',
        'Mechanic log is a real time mechanic logger which works in PVE and can detect mechanical failures: when,who and how and by what mechanic.',
        'It is a great feature for beginners especially for squad commanders in order to understand what or who created the failure.'
    ],
    summarize: 'This is a popular addon and mostly used by experienced players and commanders in order to have a better view of mechanical failures.',
    popular: 4
};
export const logUploader: IAddonsData = {
    pointers: [
        'Uploader is an addon which applies on arcDPS as an extension.',
        'Uploader automatically uploads EVTC combat logs in-game instead of manually uploading them to DPS REPORT.',
        'It gives an easy access to recent logs, one click to view them.',
        'It does not upload any logs while you are in combat.',
        'This extension could be linked to a Discord Webhook Integration which can post your logs automatically to your Discord server.'
    ],
    summarize: 'This Addon is somehow popular, mainly used by static groups or communities for log management optimization.',
    popular: 3
};
export const kpme: IAddonsData = {
    pointers: [
        'Killproof.me is an addon which applies on arcDPS as an extension.',
        'Killproof.me is a kill proof detecter. It shows the party/squad existing KP: LI, Fractals UFE and raid wings bosses.',
        'This extension is linked to KillProof website and can read players KP only if those player connected to the service with an API.',
    ],
    summarize: 'This addon is popular in instance content scenes as it gives the ability for other players to detect your skill level.',
    popular: 5
};
export const clears: IAddonsData = {
    pointers: [
        'Clears is an addon which applies on arcDPS as an extension.',
        'Clears shows raid clears for your account within the game which gives some more convenient than Discord bots.',
        'Clears could show your group clears if they are using the extension as well.'
    ],
    summarize: 'This Addon is less popular as most players use discord API hooks in order to view their own weekly clear progress.',
    popular: 2
};
export const healingStats: IAddonsData = {
    pointers: [
        'Healing Stats is an addon which applies on arcDPS as an extension.',
        'Healing stats is a real time healing meter which works in PVE and WvW which tracks your healing output.',
        'The Healing stats shows the amount of healing per a moment or total and which skills provided what.',
        'Unfortunately this extension is selfish. You cannot see other people healing output unless both activate "live stats".'
    ],
    summarize: 'This Addon is not popular at all due to the inability to track other players healing stats without consent and there is an internet price for healing stats share.',
    popular: 1
};
export const blish: IAddonsData = {
    pointers: [
        'Blish HUD is an overlay framework which relies on developers modules for its features.',
        'Blish functionality is all over the place and it has integration to arcDPS as well.',
        'Markers & Path: Advanced format for commander marks and paths.',
        'KillProof Module, integrated with arcDPS and uses the KPME feature.',
        'Casual other features such as: Compass, Events/Metas Observer and ETC.'
    ],
    summarize: 'This addon is less popular as most players use arcDPS mostly but some teams actually use blish for instance content in order to mark/path and get the mechanical announcement.',
    popular: 2
};