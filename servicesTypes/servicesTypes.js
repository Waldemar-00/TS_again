"use strict";
//! Partial
//! Required
//! Readonly
//! Omit
//! Pick
//! Exstract
//! Exclude
const sym = Symbol('sym');
//! ReturnType
//! Parameters
//! ConstructorParameters
//! InstanceType
class UserServices {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.name = name;
    }
}
function createData(id, name) {
    return new UserServices(id, name);
}
async function getMenuFromServer() {
    return [{ name: 'Analitics', url: 'https://analitics.com' }];
}
async function getArray(fn) {
    return [await fn];
}
