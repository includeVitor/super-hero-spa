import { sanatizePower, sumPowers } from '../../lib/utils'

describe('lib/Utils', () => {
  it('sanatizePower should work correctly', () => {
    expect(0).toBe(sanatizePower('null'))
    expect(0).toBe(sanatizePower('qualquer texto'))
  })
  it('sumPowers should work correcly', () => {
    const powers1 = {
      intelligence: '0',
      combat: '0',
      durability: '0',
      speed: '0',
      strength: '0',
      power: '0'
    }
    expect(0).toBe(sumPowers(powers1))

    const powers2 = {
      intelligence: 'null',
      combat: 'null',
      durability: 'null',
      speed: 'null',
      strength: 'null',
      power: 'null'
    }

    expect(0).toBe(sumPowers(powers2))

    const powers3 = {
      intelligence: '10',
      combat: '10',
      durability: '10',
      speed: '10',
      strength: '10',
      power: '10'
    }

    expect(60).toBe(sumPowers(powers3))
  })
})

export {}
