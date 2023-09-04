
/**
 * Destruct a nested URL pathname up to the second degree of nesting.
 * @param url String pathname URL
 * @returns Nested URL pathname
 */
export function nestedUrlDestructuring(url: string){
    return url.split('/')[2].replace('%20',' '); // URL: URL/AA/BB -> BB , URL/AA/B%20BBB -> B BBB
}

/**
 * Converts a css wing class name to wing name. Example:  wing-1 -> wing one , wing-5 -> wing
 * @param encounterClass String wing or strike css class name
 * @returns String wing name
 */
export function wingClassToString(encounterClass: string){
    if(encounterClass.includes('Strikes')) return encounterClass;
    const wordMap: { [key: string]: string } = { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven'};
    return `wing ${wordMap[encounterClass.charAt(encounterClass.length - 1)]}`;
}

/**
 * Checks if a certain char is a numeric char. // '5' -> true , 'X' -> false
 * @param char String.
 * @returns True/False
 */
export function isNumber(char: string){
    return /^[0-9]$/.test(char);
}

/**
 * Adjusts the string date format to have a ',' and removes the year. Example: 'Tue Aug 22 2023 -> Tue, Aug 22'
 * @param stringDate String Date.
 * @returns String
 */
export function NewsDateFormat(stringDate: string){
    const slice1 = stringDate.substring(0,3);
    const slice2 = stringDate.substring(4,10);
    return slice1 + ', ' + slice2;
}