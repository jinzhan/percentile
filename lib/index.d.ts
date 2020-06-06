export = percentile;
/**
 * Calculate percentile for given array of values.
 *
 * @template T
 * @param {Number|Array<Number>} pOrPs - percentile or a list of percentiles
 * @param {Array<T>|Array<Number>} list - array of values
 *
 * @return {Number|T|Array<Number>|Array<T>}
 */
declare function percentile<T>(pOrPs: number | Array<number>, list: number[] | T[]): number | number[] | T | T[];
