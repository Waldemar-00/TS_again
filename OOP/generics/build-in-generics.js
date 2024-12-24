"use strict";
async function resolvePromise(arg) {
    const r = await new Promise((resolve, reject) => resolve(arg));
    return r;
}
resolvePromise(177).then(arg => console.log(arg));
resolvePromise('string').then(arg => console.log(arg));
resolvePromise(true).then(arg => console.log(arg));
const record = {
    some: true,
    other: false,
    abc: true
};
function getHalfOfArray(array) {
    array.length = array.length / 2;
    return array;
}
console.log(getHalfOfArray(['a', 'b', 'c', 'd']));
