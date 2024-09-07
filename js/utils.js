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
