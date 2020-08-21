const { findElement } = require('./../support/findElement');

/**
 * Checks text on a given element.
 * @example Verify {elementType} "{elementName}"( not) with text "{expectedText}"
 * @example Verify class "s-result-list" with text "Amazon Testartikel"
 * @example Verify class "s-result-list" not with text "unbekannter Artikel"
 * @memberof then
 * @param {string} elementType Type of the element (class|data-index|id|tag|title|xpath)
 * @param {string} elementName Name of the element
 * @param {boolean} falseCase Check, whether the text is or is not on the given element
 * @param {string} expectedText Text, that will be validated on the given element
 */
export function checkText(elementType, elementName, falseCase, expectedText) {
    let element = findElement(elementType, elementName);

    falseCase
        ? element.should('not.contain', expectedText)
        : element.should('contain', expectedText);
}
