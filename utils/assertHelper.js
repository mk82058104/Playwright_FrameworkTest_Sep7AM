import { expect } from '@playwright/test';

/**
 * Assert that a locator displays the exact expected text.
 *
 * @param {import('@playwright/test').Locator} locator - Playwright locator to validate.
 * @param {string|number} expected - Exact text expected to be displayed.
 * @returns {Promise<void>} Resolves when the assertion succeeds.
 */
export async function assertText(locator, expected) {
    await expect(locator).toHaveText(expected);
}

/**
 * Assert that a locator contains the expected text, even when additional content is present.
 *
 * @param {import('@playwright/test').Locator} locator - Playwright locator to validate.
 * @param {string|number} expected - Partial text expected to be included.
 * @returns {Promise<void>} Resolves when the assertion succeeds.
 */
export async function assertContainsText(locator, expected) {
    await expect(locator).toContainText(expected);
}

/**
 * Assert that the current page URL matches the provided value or regex pattern.
 *
 * @param {import('@playwright/test').Page} page - Playwright page object under test.
 * @param {string|RegExp} value - A plain URL fragment or regular expression to match.
 * @returns {Promise<void>} Resolves when the assertion succeeds.
 */
export async function assertUrl(page, value) {
    const expectedUrl = value instanceof RegExp ? value : new RegExp(value);
    await expect(page).toHaveURL(expectedUrl);
}

/**
 * Assert that an element is visible to the user.
 *
 * @param {import('@playwright/test').Locator} locator - Playwright locator to validate.
 * @returns {Promise<void>} Resolves when the assertion succeeds.
 */
export async function assertVisible(locator) {
    await expect(locator).toBeVisible();
}

/**
 * Assert that an element is hidden or absent from the page.
 *
 * @param {import('@playwright/test').Locator} locator - Playwright locator to validate.
 * @returns {Promise<void>} Resolves when the assertion succeeds.
 */
export async function assertHidden(locator) {
    await expect(locator).toBeHidden();
}