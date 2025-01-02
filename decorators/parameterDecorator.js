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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');
class Meta {
    constructor(users) {
        this.users = users;
    }
    changeUsersAmount(users) {
        this.users = users;
    }
}
__decorate([
    ValidatePlus(),
    __param(0, Positive()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], Meta.prototype, "changeUsersAmount", null);
function Positive() {
    return (target, key, index) => {
        // console.log( Reflect.getOwnMetadata( "design:type", target, key ) )
        // console.log( Reflect.getOwnMetadata( "design:paramtypes", target, key ) )
        // console.log( Reflect.getOwnMetadata( "design:returntype", target, key ) )
        //! you can get: "design:type", "design:paramtypes", "design:returntype"
        let existParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, key) || [];
        existParams.push(index);
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, key);
    };
}
function ValidatePlus() {
    return (target, key, descriptor) => {
        let changeUsersAmount = descriptor.value;
        descriptor.value = function (...args) {
            let params = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, key);
            if (params.length > 0) {
                params.forEach((index) => {
                    try {
                        if (args[index] < 0)
                            throw new Error(`The argument: ${args[index]} is less than 0... It must be more than 0! `);
                        else
                            return changeUsersAmount?.apply(this, args);
                    }
                    catch (error) {
                        if (error instanceof Error)
                            console.log(error.message);
                    }
                });
            }
        };
    };
}
const meta = new Meta(10);
meta.changeUsersAmount(-1100);
meta.changeUsersAmount(100);
console.log(meta.users);
