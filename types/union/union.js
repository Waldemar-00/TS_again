"use strict";
const array = [];
function unionTypes(arg) {
    if (typeof arg === 'string')
        console.log(arg.toLocaleUpperCase());
    else if (typeof arg === 'number')
        console.log(arg + 200);
    else
        throw new Error('Argument is not a string or number');
}
unionTypes('String');
unionTypes(1000);
// unionTypes({}) Argument of type '{}' is not assignable to parameter of type 'string | number'
function logObjectProperties(obj) {
    if ('a' in obj)
        console.log(obj.a + 100);
    else
        console.log(obj.b + 200);
}
logObjectProperties({ a: 100 });
logObjectProperties({ b: 100 });
function narrowingSpecialCase(a, b) {
    if (typeof a === typeof b) {
        console.log(`Both arguments have string type: a: ${a}, b: ${b}`);
    }
}
narrowingSpecialCase('A', 'B');
const literalArray = ['a', 'b'];
