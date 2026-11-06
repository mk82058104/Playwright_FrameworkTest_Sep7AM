/**
 * Replace the current value of an input or editable element.
 *
 * @param {import('@playwright/test').Locator} locator - Locator for the input or editable element.
 * @param {string} value - Text to enter.
 * @returns {Promise<void>} Resolves after Playwright fills the element.
 * @throws {Error} If the element cannot be found, is not editable, or times out.
 *
 * @example
 * await fillInput(page.getByLabel('Email'), 'user@example.com');
 */
export async function fillInput(locator, value) {
    await locator.fill(value);
}

/**
 * Click an element matched by a Playwright locator.
 *
 * @param {import('@playwright/test').Locator} locator - Locator for the target element.
 * @returns {Promise<void>} Resolves after the click completes.
 * @throws {Error} If the element cannot be found, is not actionable, or times out.
 *
 * @example
 * await clickOnEle(page.getByRole('button', { name: 'Submit' }));
 */
export async function clickOnEle(locator) {
    await locator.click();
}

/**
 * Select an option in a native HTML select element.
 *
 * @param {import('@playwright/test').Locator} locator - Locator for the select element.
 * @param {string} value - Option value to select.
 * @returns {Promise<string[]>} Values of the selected options.
 * @throws {Error} If the select element or requested option cannot be found.
 *
 * @example
 * await selectOption(page.getByLabel('Country'), 'CA');
 */
export async function selectOption(locator, value) {
    return locator.selectOption(value);
}

/**
 * Move the mouse pointer over an element.
 *
 * @param {import('@playwright/test').Locator} locator - Locator for the target element.
 * @returns {Promise<void>} Resolves after the pointer reaches the element.
 * @throws {Error} If the element cannot be found or hovered before timeout.
 *
 * @example
 * await hoverOnEle(page.getByRole('button', { name: 'More options' }));
 */
export async function hoverOnEle(locator) {
    await locator.hover();
}

/**
 * Clear an input or editable element.
 *
 * @param {import('@playwright/test').Locator} locator - Locator for the input or editable element.
 * @returns {Promise<void>} Resolves after the element is empty.
 * @throws {Error} If the element cannot be found, is not editable, or times out.
 *
 * @example
 * await clearInput(page.getByLabel('Search'));
 */
export async function clearInput(locator) {
    await locator.clear();
}