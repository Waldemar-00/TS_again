"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
class Accessor {
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
    }
}
__decorate([
    accessorDecorator()
], Accessor.prototype, "users", null);
const accessor = new Accessor();
function accessorDecorator() {
    return (target, _key, descriptor) => {
        const get = descriptor.get;
        const set = descriptor.set;
        descriptor.get = () => {
            console.log('New getter____');
            return get?.apply(target);
        };
        descriptor.set = (...args) => {
            console.log('New setter____');
            set?.apply(target, args);
        };
    };
}
accessor.users = 7;
console.log(accessor.users);
