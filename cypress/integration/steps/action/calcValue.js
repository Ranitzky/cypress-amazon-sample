const { getStore } = require('./../support/getStore');

/**
 * Converts a Euro price to a float number
 * @private
 * @param {string} price - Currency value, that will be converted
 * @returns {Number}
 */
function convertToFloat(price) {
    return Number(price.replace(/[^0-9,]+/g, '').replace(',', '.'));
}

/**
 * Calculates two stored keys based on the operator. Works only with € currency.
 * Requires, that keys are stored first.
 * @example Calculate "{valueName1}" {operator} "{valueName2}" as "{result}"
 * @example Calculate "$articlePrice1" + "$articlePrice2" as "totalPrice"
 * @param {string} valueName1 - 1st input
 * @param {string} operator - Math operator (plus|minus|multiply by|divide by)
 * @param {string} valueName2 - 2nd input
 * @param {string} result - The result is saved in this variable name.
 */
export function calcValue(valueName1, operator, valueName2, result) {
    let val1 = getStore(valueName1);
    let val2 = getStore(valueName2);

    val1 = convertToFloat(val1);
    val2 = convertToFloat(val2);

    let price;

    switch (operator) {
        case 'plus':
            price = val1 + val2;
            break;

        case 'minus':
            price = val1 - val2;
            break;

        case 'multiply by':
            price = val1 * val2;
            break;

        case 'divide by':
            price = val1 / val2;
            break;

        default:
            throw new Error('No valid calculation operator entered.');
    }

    Cypress.config[result] = price.toLocaleString('de');
}
