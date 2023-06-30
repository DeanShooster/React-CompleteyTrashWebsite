
// Interfaces
export interface ILink{
    path: string;
    text: string;
}

// Routes
export const homePage = '/';
export const newsPage = '/News';
export const recordsPage = '/Records';
export const gameAndFunPage = '/Games&Fun';
export const addonsPage = '/Addons';
export const recruitmentPage = '/Recruitment';
export const aboutPage = '/About';
export const policyPage = '/Policy';

// Navigation Links
export const links: ILink[] = [
    { path: newsPage , text: 'News' },
    { path: recordsPage , text: 'Records' },
    { path: gameAndFunPage , text: 'Games & Fun' },
    { path: addonsPage , text: 'Addons' },
    { path: recruitmentPage , text: 'Recruitment' },
    { path: aboutPage , text: 'About' },
];