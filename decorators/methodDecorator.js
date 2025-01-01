"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class UserError {
    constructor(users) {
        this.users = users;
    }
    error() {
        throw new Error('TEST ERROR');
    }
}
__decorate([
    DLog
], UserError.prototype, "error", null);
function DLog(target, //! instance of UserError
key, descriptor) {
    console.log('Before redefined');
    descriptor.value = () => {
        console.log(target);
        console.log(key);
        console.log(descriptor);
    };
    console.log('After redefined');
}
new UserError(8888).error();
