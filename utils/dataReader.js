//import { readFileSync } from 'node:fs';
import fs from 'fs'

/**
 * Read one named value from the shared Playwright test-data JSON file.
 *
 * The data file is resolved relative to this module, so callers can use this
 * helper from tests regardless of the process's current working directory.
 * The JSON file must contain a top-level object whose properties are data keys.
 *
 * @param {string} key - Name of the top-level property to return.
 * @returns {*} Value stored under `key`, or `undefined` when the property is absent.
 * @throws {Error} If the data file cannot be read or does not contain valid JSON.
 *
 * @example
 * // Given testdata.json contains: { "login": { "username": "tester" } }
 * const loginData = getTestData('login');
 * console.log(loginData.username); // "tester"
 */
export function getTestData(key) {
    // const dataFileUrl = new URL('../test-data/testdata.json', import.meta.url);
    // const json = readFileSync(dataFileUrl, 'utf8');
    // const data = JSON.parse(json);
       const data=JSON.parse(fs.readFileSync('./test-data/testdata.json'));
       return data[key];
       
 

    // return data[key];
}