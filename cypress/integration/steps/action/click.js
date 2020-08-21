const { findElement } = require('./../support/findElement');

/**
 * Clicks a given element.
 * @example Click {elementType} "{elementName}"
 * @example Click class "nav-search-submit-text"
 * @memberof when
 * @param {string} elementType Type of the element (class|data-index|id|tag|title|xpath)
 * @param {string} elementName Name of the element
 */
export function click(elementType, elementName) {
    let element = findElement(elementType, elementName);
    element.click();
}
