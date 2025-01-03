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
class UserError {
    constructor(users) {
        this.users = users;
    }
    error() {
        throw new Error('TEST ERROR');
    }
}
__decorate([
    DLog,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserError.prototype, "error", null);
function DLog(target, //! instance of UserError
key, descriptor) {
    console.log('Before redefined');
    descriptor.value = () => {
        console.log(target);
        console.log(key);
        console.log(descriptor);
    };
    console.log(' redefined');
}
new UserError(8888).error();
