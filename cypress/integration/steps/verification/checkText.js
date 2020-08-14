/**
 * Checks text on a given element.
 * @example Verify {elementType} "{elementName}"( not) with text "{expectedText}"
 * @example Verify class "s-result-list" with text "Amazon Testartikel"
 * @example Verify class "s-result-list" not with text "unbekannter Artikel"
 * @param {string} elementName Name of the element
 * @param {boolean} falseCase Check, whether the text is or is not on the given element
 * @param {string} expectedText Text, that will be validated on the given element
 */
export function checkText(elementName, falseCase, expectedText) {
    let element = cy.get(`.${elementName}`);

    falseCase
        ? element.should('not.contain', expectedText)
        : element.should('contain', expectedText);
}
