// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { countsAsAYes } from '../utils.js';

const test = QUnit.test;

test('should return true for "yes" strings', assert => {
    // Arrange
    const yesString = 'yes';
    const expected = true;
    // Act
    const actual = countsAsAYes(yesString);
    // Expect
    assert.equal(actual, expected);
});

test('should return true for "yep" strings', assert => {
    // Arrange
    const yesString = 'y';
    const expected = true;
    // Act
    const actual = countsAsAYes(yesString);
    // Expect
    assert.equal(actual, expected);
});

test('should return true for "y" strings', assert => {
    // Arrange
    const yesString = 'y';
    const expected = true;
    // Act
    const actual = countsAsAYes(yesString);
    // Expect
    assert.equal(actual, expected);
});


test('should return true for uppercase "YES", "YEP", and "Y" strings', assert => {
    // Arrange
    const yesString = 'YES';
    const expected = true;
    // Act
    const actual = countsAsAYes(yesString);
    // Expect
    assert.equal(actual, expected);
});

test('should return false for non-yes-like strings', expect => {
    // Arrange
    const no = 'no';
    const expected = false;
    // Act
    const actual = countsAsAYes(no);
    // Expect
    expect.equal(actual, expected);
});