/**
 * Utils Module
 * This module is for commonly used I/O oeprations and error catching.
 */

export function printDebug(statement, ...values) {
  console.log(`${statement} : ${values}`);
}

export function printObjectData(data) {
  Object.keys(data).forEach((key) => {
    console.log(`${key}: ${data[key]}`);
  });
}

export function printLoopObjectData(data) {
  for (let key in data) {
    console.log(`${key}: ${data[key]}`);
  }
}

export function getUserInputById(id) {
  return document.getElementById(id);
}

export function getUserInputByName(name) {
  return document.querySelector(`input[name="${name}"]`);
}

export function isEmpty(element) {
  return element === null || element === undefined;
}
