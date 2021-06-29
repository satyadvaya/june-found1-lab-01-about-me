// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { isYes } from '../utils.js';

const test = QUnit.test;

// expect can be called anything you want
// its just a parameter
test('should return true for "yes" strings', assert => {
    // Arrange
    const yesString = 'yes';
    const expected = true;
    // Act
    const actual = isYes(yesString);
    // Expect
    assert.equal(actual, expected);

});
test('should return true for "y" strings', assert => {
    // Arrange
    const yesString = 'y';
    const expected = true;
    // Act
    const actual = isYes(yesString);
    // Expect
    assert.equal(actual, expected);

});

test('should return true for uppercase YES strings', assert => {
    // Arrange
    const yesString = 'YES';
    const expected = true;
    // Act
    const actual = isYes(yesString);
    // Expect
    assert.equal(actual, expected);

});

test('should return false for non yes-y string', expect => {
    // Arrange
    const no = 'no';
    const expected = false;
    // Act
    const actual = isYes(no);
    // Expect
    expect.equal(actual, expected);
});