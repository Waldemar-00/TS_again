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
let Ship = class Ship {
    constructor(name, volume) {
        this.name = name;
        this.volume = volume;
    }
};
Ship = __decorate([
    FDСreatedAt(),
    __metadata("design:paramtypes", [String, Number])
], Ship);
function FDСreatedAt() {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.createdAt = new Date().toTimeString();
            }
        };
    };
}
const ship001 = new Ship('Ice Volat', 200000);
if (ship001.createdAt) {
    console.log(ship001.createdAt);
}
if (ship001.createdAt) {
    console.log(ship001.createdAt);
}
console.log(ship001.createdAt);
console.log(ship001.createdAt);
console.log(ship001.createdAt);
