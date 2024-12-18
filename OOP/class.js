"use strict";
class CUser {
    constructor(nameOrAge, age) {
        if (typeof nameOrAge === "string")
            this.name = nameOrAge;
        else if (typeof nameOrAge === "number")
            this.age = nameOrAge;
        if (typeof age === "number")
            this.age = age;
    }
}
const user_1 = new CUser();
const user_2 = new CUser(42);
const user_3 = new CUser('ULADZIMIR');
const user_4 = new CUser('ULADZIMIR', 42);
console.log(user_1);
console.log(user_2);
console.log(user_3);
console.log(user_4);
//! "strictPropertyInitialization": false -- if you need to use class like an interface
//! else use '!' -- role!: boolean
class CAdmin {
}
const admin_1 = new CAdmin();
console.log(admin_1.role = true);
