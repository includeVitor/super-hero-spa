import { PowerStats, PowerStatsEnum } from '../service/superHero/types'

const sanatizePower = (power: string): number => {
  const powerNumber = +power
  return isNaN(powerNumber) ? 0 : powerNumber
}

const sumPowers = (powers: PowerStats): number => {
  let sum = 0

  sum += sanatizePower(powers[PowerStatsEnum.intelligence])
  sum += sanatizePower(powers[PowerStatsEnum.combat])
  sum += sanatizePower(powers[PowerStatsEnum.durability])
  sum += sanatizePower(powers[PowerStatsEnum.speed])
  sum += sanatizePower(powers[PowerStatsEnum.strength])
  sum += sanatizePower(powers[PowerStatsEnum.power])

  return sum
}

export { sanatizePower, sumPowers }
