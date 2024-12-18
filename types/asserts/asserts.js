"use strict";
//* We have an object from some server userFrom
function assertsNumber(value) {
    if (typeof value !== 'number')
        throw new Error('The value is not a number!');
}
function getValue(value) {
    try {
        assertsNumber(value);
        return `The value is a number: ${value}`;
    }
    catch (error) {
        if (error instanceof Error)
            console.log(error.message);
    }
}
console.log(getValue(111));
console.log(getValue('111'));
const assertedKeys = ['name', 'age', 'email'];
const commingUser = {
    name: 'Sony',
    age: 45,
    email: 'sony@getMaxListeners.com',
    description: 'Lorem ipsum dolor sit amet',
};
function assertsObject(obj) {
    const truth = assertedKeys.every(key => key in obj);
    // const truth = Object.keys( obj as IAssertedUser ).every( (key, index) => key === assertedKeys[index] )
    if (typeof obj === 'object' && obj !== null && truth)
        return;
    else
        throw new Error('Comming object not match our IAssertedUser interface!');
}
assertsObject(commingUser);
console.log(commingUser.email);
