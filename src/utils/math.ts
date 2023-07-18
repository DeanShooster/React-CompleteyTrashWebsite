
/**
 * Generates random number between 0 to a given limit.
 * @param limit Number limitation
 * @returns Number between 0 to limit
 */
export function randomNumberZeroToLimit(limit : number){
    if(limit < 0) return 0;
    return Math.floor(Math.random()*limit);
}