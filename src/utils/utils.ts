/**
 * Gets the count of numbers after the decimal point from a number.
 *
 * @param num - Number to get its decimal count.
 * @returns Number of decimals.
 */
const decimalCount = (num: number): number => {
  // Convert to String
  const numStr = num.toString()

  // String Contains Decimal
  if (numStr.includes('.')) {
    return numStr.split('.')[1].length
  }

  // String Does Not Contain Decimal
  return 0
}

export { decimalCount }
