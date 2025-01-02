"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
    ,
    __metadata("design:paramtypes", [Number])
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
//* Object { users: 44444 }
//* ​
//* users: 44444
//* ​
//* <prototype>: Object { users: 777, … }
//* ​​
//* constructor: class  {}
//* ​​​
//* length: 0
//* ​​​
//* name: ""
//* ​​​
//* prototype: Object { users: 777, … }
//* ​​​
//* <prototype>: class Users77 { constructor(users) }
//* ​​
//* users: 777
//* ​​
//* <prototype>: Object { … }
//* ​​​
//* constructor: class Users77 { constructor(users) }
//* ​​​
//* getUsersAmount: function getUsersAmount()
//* ​​​​
//* length: 0
//* ​​​​
//* name: "getUsersAmount"
//* ​​​​
//* <prototype>: function ()
//* ​​​
//* <prototype>: Object { … }
