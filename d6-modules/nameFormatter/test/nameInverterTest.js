const chai = require('chai');
const assert = chai.assert;

const nameInverter = require('../nameInverter');

describe('nameInverter', function() {
  it ('should return an empty string when passed an empty string', () => {
    const inputName = '';
    const expectedOutput = '';
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it ('should return a single name when passed a single name', () => {
    const inputName = 'name';
    const expectedOutput = 'name';
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it ('should return a single name when passed a single name with extra spaces', () => {
    const inputName = ' name ';
    const expectedOutput = 'name';
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it ('should return last-name, first-name when passed a first and last name', () => {
    const inputName = 'first last';
    const expectedOutput = 'last, first';
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it ('should return a last-name, first-name when passed a first and last-name with extra spaces around the names', () => {
    const inputName = ' first last';
    const expectedOutput = 'last, first';
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it ('should return an empty string when passed a single honorific', () => {
    const inputName = 'Dr. ';
    const expectedOutput = '';
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it ('should return honorific first-name when passed honorific first-name', () => {
    const inputName = 'Dr. first';
    const expectedOutput = 'Dr. first';
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it ('should return honorific last-name, first-name when passed honorific first-name, last-name', () => {
    const inputName = 'Dr. first-name last-name';
    const expectedOutput = 'Dr. last-name, first-name';
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it ('should return honorific last-name, first-name when passed honorific first-name, last-name with extra spaces around the words', () => {
    const inputName = ' Dr. first-name last-name ';
    const expectedOutput = 'Dr. last-name, first-name';
    assert.equal(nameInverter(inputName), expectedOutput);
  });

  it ('should throw an error when name is undefined', () => {
    const inputName = undefined;
    const expectedOutput = "throw 'Error'";
    assert.equal(nameInverter(inputName), expectedOutput);
  })









});