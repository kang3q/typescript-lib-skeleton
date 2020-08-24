/**
 * 숫자 더하기 기능을 제공합니다.
 *
 * @export
 * @class NumberUtils
 */
export class NumberUtils {
  /**
   * 숫자를 더하여 출력합니다.
   *
   * @param {...number} value
   * @returns {number}
   * @memberof NumberUtils
   */
  public sum(...value: number[]): number {
    return value.reduce((v, c) => v + c, 0)
  }
}
