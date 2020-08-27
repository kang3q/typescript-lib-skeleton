/**
 * String 기능을 제공합니다.
 *
 * @export
 * @class StringUtils
 */
export class StringUtils {
  /**
   * 숫자를 더하여 출력합니다.
   *
   * @param {...string} value
   * @returns {string}
   * @memberof StringUtils
   */
  public sum(...value: string[]): string {
         const a = 'test'
    return value.join('|') + ` + ${a}`
  }
}
