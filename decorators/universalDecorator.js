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
function DUniversal(name) {
    console.log("Initialization " + name);
    return function () {
        console.log("Calling: " + name);
    };
}
let MyClass = class MyClass {
    method(_) { }
    static staticMethod(_) { }
    constructor(_) { }
};
__decorate([
    DUniversal('PROPERTY'),
    __metadata("design:type", Object)
], MyClass.prototype, "property", void 0);
__decorate([
    DUniversal('METHOD'),
    __param(0, DUniversal("PARAMETER")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], MyClass.prototype, "method", null);
__decorate([
    DUniversal('STATIC_property'),
    __metadata("design:type", Object)
], MyClass, "staticProperty", void 0);
__decorate([
    DUniversal('STATIC_method'),
    __param(0, DUniversal("STATIC_parameter")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], MyClass, "staticMethod", null);
MyClass = __decorate([
    DUniversal('CLASS'),
    __param(0, DUniversal("CONSTRUCTOR_parameter")),
    __metadata("design:paramtypes", [Object])
], MyClass);
// Initialization PROPERTY
// Calling: PROPERTY
// Initialization METHOD
// Initialization PARAMETER
// Calling: PARAMETER
// Calling: METHOD
// Initialization STATIC_property
// Calling: STATIC_property
// Initialization STATIC_method
// Initialization STATIC_parameter
// Calling: STATIC_parameter
// Calling: STATIC_method
// Initialization CLASS
// Initialization CONSTRUCTOR_parameter
// Calling: CONSTRUCTOR_parameter
// Calling: CLASS
