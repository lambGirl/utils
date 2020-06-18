/**
 * 判断是够为Number
 * @param value 
 */
export function isNumber(
    value: any
  ): value is number {
    return typeof value === 'number';
}
  