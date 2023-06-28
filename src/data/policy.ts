const information: IPoliciesData = {
    title: 'Information',
    intro: 'We do not collect/gather any information of the following:',
    list: [
        'Connection information such as browser type,version or OP.',
        'Computer IP Address.',
        'Completely Trash will never ask for private information such as Emails, Accounts or any social media platform nor such a method exist in the website.',
        'Contact is possible trough the social media platforms provided: YouTube, Reddit or Discord then these platforms privacy policy overturn this policy.',
        'Completely Trash do not serve any tracking or identifying cookies nor local/session storage.',
        'Information will not be asked or collected from external sources by Completely Trash.'
    ]
};

const copyWrite: IPoliciesData = {
    title: 'Copy Write',
    intro: 'All original work on this website is copyright Completely Trash.',
    list: [
        'This website uses artwork, images and icons that are © 2010-2022 ArenaNet, LLC.',
        'All other trademarks which do not belonged to CompletelyTrash or ArenaNet are property of their respective owners.'
    ]
};

const thirdParty: IPoliciesData = {
    title: 'Third Party',
    intro: `Articles and services may include third party integrations or content. These websites may collect data about you as the user,use cookies and even use tracking or monitoring activity.
    Completely Trash third parties:`,
    list: [
        'YouTube embedded videos.',
        'Reddit redirection links.',
        'Discord redirection links.',
        'Other third party websites for guild wars 2 redirection links.'
    ]
};

const rulesAndUpdates: IPoliciesData = {
    title: 'Rules & Updates',
    intro: 'Updates and/or changes and user acceptance.',
    list: [
        'An update to the privacy policy occur at any given time. When such an update occurs a notification will be posted on the main page such that it will be visible to any visitor.',
        'Completely Trash promises to maintain the update message up to 2 weeks and advise to visit this policy in order to stay informed.',
        'A change to the informational privacy will not occur at any given time at the future, Completely Trash will remain a "neutral" website.',
        'By using this website you as a user signify your acceptance of this policy. If you refuse this policy do not consume our services.',
        'We do not hold the responsibility to verify if you as the visitor have read the policy but only provide all the information regrading our services.'
    ]
};

const contact: IPoliciesData = {
    title: 'Contact',
    intro: '',
    list: [
        'If you wish to contact us about anything relevant to our services including this policy visit our media platforms such as Discord as this website offers no contact forms in order to follow the Information policy clause.',
        'If you wish for an in game contact feel free to contact: Dean.3056.'
    ]
}



export interface IPoliciesData{
    title: string;
    intro: string;
    list: string[]
}

export const policies: IPoliciesData[]= [information,copyWrite,thirdParty,rulesAndUpdates,contact];