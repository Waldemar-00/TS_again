"use strict";
const user = {
    name: 'John',
    surname: 'Smith',
    city: 'San Francisco',
    age: 42
};
function getFullInfo(persona) {
    return `${persona.name} ${persona.surname} ${persona.age} years old, he lives in ${persona.city} `;
}
console.log(getFullInfo(user));
