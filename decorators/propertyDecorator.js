"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class UsersWithLimit {
    constructor() {
        this.users = 200; //! @DMaxUsers(100) calls after constructor!!!
    }
}
__decorate([
    DMaxUsers(100)
], UsersWithLimit.prototype, "users", void 0);
function DMaxUsers(max) {
    return (target, key) => {
        let value;
        const getter = () => value;
        const setter = (newValue) => {
            if (newValue <= max) {
                value = newValue;
            }
            else {
                console.log(`You cannot set value more than maximum: ${max}!!!`);
            }
        };
        Object.defineProperty(target, key, {
            set: setter,
            get: getter
        });
    };
}
const maxUsers = new UsersWithLimit();
maxUsers.users = 1000;
maxUsers.users = 77;
console.log(maxUsers.users);
