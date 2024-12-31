"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let CUserService_1 = class CUserService_1 {
    //! NullUsers will be called before the constructor below
    constructor(users = 1110000) {
        this.users = users;
        console.log('Constructor WORKS', this.users);
        this.users = users;
    }
    getUserAmount() {
        return this.users;
    }
};
CUserService_1 = __decorate([
    NullUsers //! works BEFORE
    ,
    FewUsersAdvanced //! work AFTER constructor
], CUserService_1);
function NullUsers(constructor) {
    constructor.prototype.users = 0;
    console.log(`You reset amount of the service users to ${constructor.prototype.users}`); //! gets users from prototype before the constructor will be called
}
function FewUsersAdvanced(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 333;
        }
    };
}
console.log(new CUserService_1().getUserAmount());
