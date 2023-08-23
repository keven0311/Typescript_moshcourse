// @ts-nocheck
// // above command is to disable typescript type checking for JS code.
// export function calculateTax(income) {
//   return income * 0.3;
// }

//describe types using JSDoc;
/**
 * Calculates income tax.      //add commend to this function.
 * @param {number} income   - Net salary after expenses.
 * @returns {number}
 */
export function calculateTax(income) {
  return income * 0.3;
}
