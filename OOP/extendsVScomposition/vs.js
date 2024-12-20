"use strict";
class User_ex {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
}
const users = new Users();
console.log(users); //!!! TOO MANY methods from class Array. We don't need them here!!!
//! BETTER COMPOSTION
class UserList {
    constructor(u) {
        this.users = u;
    }
    push(u) {
        this.users.push(u);
    }
}
const userList = new UserList([]);
console.log(userList.push(new User_ex('John')));
console.log(userList.push(new User_ex("Sally")));
console.log(userList);
//! subject area - COMPOSITION
class User11 {
    constructor(name) {
        this.name = name;
    }
}
class Payment11 {
    constructor(date) {
        this.date = date;
    }
}
class UserPayment {
    constructor(user, payment) {
        this.user = user;
        this.payment = payment;
    }
}
const userPayment = new UserPayment(new User11('John'), new Payment11(new Date()));
console.log(userPayment.payment);
