"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let Users77 = class Users77 {
    constructor(users = 3333) {
        this.users = users;
    }
    getUsersAmount() { return this.users; }
};
Users77 = __decorate([
    fabricOfDecorator(777) //! It has worked before constructor
    ,
    AdvancedFabric(44444) //! It will work after constructor
], Users77);
function fabricOfDecorator(amount) {
    console.log("Init fabricOfDecorator");
    return function (constructor) {
        constructor.prototype.users = amount;
        console.log("Finish fabricOfDecorator");
    };
}
function AdvancedFabric(users) {
    console.log("Init AdvancedFabric");
    return function (constructor) {
        console.log("Finish AdvancedFabric");
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = users;
            }
        };
    };
}
const user77 = new Users77();
console.log(user77.users);
console.log(user77.getUsersAmount());
console.log(user77);
