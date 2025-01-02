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
class Error00 {
    errorThrower() {
        throw new Error('OUR TEST ERROR');
    }
}
__decorate([
    Catcher(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Error00.prototype, "errorThrower", null);
function Catcher(rethrow = { rethrow: false }) {
    return (_target, _key, descriptor) => {
        try {
            console.log('IN TRY');
            if (descriptor.value) {
                descriptor.value();
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            if (rethrow.rethrow) {
                throw error;
            }
            descriptor.value = () => {
                console.log('I HAVE DONE IT MYSELF!!!');
            };
        }
    };
}
const error00 = new Error00();
error00.errorThrower();
