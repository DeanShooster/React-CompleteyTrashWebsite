
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
 * @param wingClass String wing css class name
 * @returns String wing name
 */
export function wingClassToString(wingClass: string){
    const wordMap: { [key: string]: string } = { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven' };
    return `wing ${wordMap[wingClass.charAt(wingClass.length - 1)]}`;
}