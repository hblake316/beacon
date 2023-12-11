const digitalRoot = (
  number: number
) => {
  while (number > 9) {
    if (
      number === 11 ||
      number === 22 ||
      number === 33
    ) {
      return number
    }
    number = number
      .toString()
      .split('')
      .reduce(
        (sum, digit) =>
          sum + parseInt(digit, 10),
        0
      )
  }
  return number
}

export const calculateDigitalRoot = (
  date: Date,
  isLifePath: boolean
) => {
  const month = date.getMonth() + 1 // Adding 1 to convert from zero-based index
  const day = date.getDate()
  const year = isLifePath
    ? date.getFullYear()
    : new Date().getFullYear()
  return digitalRoot(month + day + year)
}

export const learnMore = () => {
  window.open(
    'https://www.numerology.com/numerology-numbers/1',
    '_blank'
  )
}
