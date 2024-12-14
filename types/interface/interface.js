"use strict";
const user11 = {
    name: 'John',
    age: 42
};
const role11 = {
    name: 'Smith',
    admin: true,
    log() {
        return `${this.name} is ${this.admin}`;
    }
};
const user_With_Role11 = Object.assign(user11, role11);
console.log(user_With_Role11);
