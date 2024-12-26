"use strict";
const keyAge = "age";
const keyName = "name";
const object = {
    name: 'John',
    age: 100
};
const nameFromObject = "name";
const ageFromObject = "age";
function getProperty(object, key) {
    return object[key];
}
console.log(getProperty(object, "name"));
