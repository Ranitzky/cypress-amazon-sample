/**
 * Clicks a given element.
 * @example Click {elementType} "{elementName}"
 * @example Click class "nav-search-submit-text"
 * @param {string} elementName Name of the element
 */
export function click(elementName) {
    cy.get(`.${elementName}`).click();
}
