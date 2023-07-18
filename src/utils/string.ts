
/**
 * Destruct a nested URL pathname up to the second degree of nesting.
 * @param url String pathname URL
 * @returns Nested URL pathname
 */
export function nestedUrlDestructuring(url: string){
    return url.split('/')[2].replace('%20',' '); // URL: URL/AA/BB -> BB , URL/AA/B%20BBB -> B BBB
}