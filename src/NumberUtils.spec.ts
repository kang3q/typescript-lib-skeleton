import { NumberUtils } from '@/NumberUtils'

describe('NumberUtils', () => {
  const numberUtils = new NumberUtils()

  it('1 = 1', () => {
    expect(numberUtils.sum(1)).toBe(1)
  })

  it('1 + 2 = 3', () => {
    expect(numberUtils.sum(1, 2)).toBe(3)
  })

  it('1 + 2 + 3 = 6', () => {
    expect(numberUtils.sum(1, 2, 3)).toBe(6)
  })
})
