"use strict";
const groupData = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
    { group: 2, name: 'd' },
    { group: 2, name: 'e' },
    { group: 3, name: 'f' },
];
function regrouping(array, key) {
    const returnedObject = {};
    array.forEach((obj) => {
        const localKey = obj[key];
        if (localKey in returnedObject) {
            returnedObject[localKey].push(obj);
        }
        else {
            returnedObject[localKey] = [];
            returnedObject[localKey].push(obj);
        }
    });
    return returnedObject;
}
console.log(regrouping(groupData, "group"));
