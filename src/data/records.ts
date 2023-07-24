export const wings: IWing[]= [
    {
        name: 'wing-1',
        wingName: 'Spirit Vale',
        bosses: ['Vale Guardian','Spirit Woods','Gorseval','Sabetha']
    },
    {
        name: 'wing-2',
        wingName: 'Salvation Pass',
        bosses: ['Sloth','Bandit Trio','Mathias']
    },
    {
        name: 'wing-3',
        wingName: 'Stronghold of the Faithful',
        bosses: ['Escort','Keep Construct','Twisted Castle','Xera']
    },
    {
        name: 'wing-4',
        wingName: 'Bastion of the Penitent',
        bosses: ['Cairn','Mursaat Oversser','Samarog','Deimos']
    },
    {
        name: 'wing-5',
        wingName: 'Hall of Chains',
        bosses: ['Soulless Horror','River','Statues','Dhuum']
    },
    {
        name: 'wing-6',
        wingName: 'Mythwright Gambit',
        bosses: ['Conjured Amalgamate','Twin Largos','Qadim']
    },
    {
        name: 'wing-7',
        wingName: 'Key of Ahdashim',
        bosses: ['Cardinal Adina','Cardinal Sabir','Qadim The Peerless']
    },
];


export interface IWing{
    name: string;
    wingName: string;
    bosses: string[]
}