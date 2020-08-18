const { expect } = require('chai');
const { camelCase } = require('lodash');

const { getStore } = require('./../support/getStore');

function convertOperator(operator) {
    return camelCase(operator);
}

/**
 * Compares two values with each other.
 * @example Verify value "{valueName1}" is {operator} value "{valueName2}"
 * @example Verify value "$vehicleTotal" is less than value "$sumTotal"
 * @memberof then
 * @param {string} valueName1 1st input
 * @param {string} operator   comparison operator (less than|greater than|equal|not equal)
 * @param {string} valueName2 2nd input
 */
export function compareValue(valueName1, operator, valueName2) {
    let val1 = getStore(valueName1);
    cy.log(`Read ${valueName1}: ${val1}`);
    let val2 = getStore(valueName2);
    cy.log(`Read ${valueName2}: ${val2}`);

    // for comparison, the price needs to be converted to number (euro-cents)
    val1 = Number(val1.replace(/[^0-9]+/g, ''));
    val2 = Number(val2.replace(/[^0-9]+/g, ''));

    operator = convertOperator(operator);
    operator == 'not equal'
        ? expect(val1).to.not.equal(val2)
        : expect(val1).to.be[operator](val2);
}
