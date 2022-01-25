const sanatizePower = (power: string): number => {
  const powerNumber = +power
  return isNaN(powerNumber) ? 0 : powerNumber
}

export { sanatizePower }
