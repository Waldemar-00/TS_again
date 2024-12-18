"use strict";
class CUserWithGetterSetter {
    constructor(login, password) {
        this._login = `User-${login}`;
        this.setPassword(password);
        this.loginAt = new Date();
    }
    get login() {
        return this._login;
    }
    set login(myLogin) {
        this._login = `User-${myLogin}`;
        this.loginAt = new Date();
    }
    get password() {
        return `Anyone cannot get a password!`;
    }
    set password(pass) {
        this.setPassword(pass);
    }
    async setPassword(pass) {
        //* secure the password and then
        setTimeout(() => {
            this._password = pass;
            console.log('secure');
        }, 2000);
    }
}
const userSetGet = new CUserWithGetterSetter('U77', '1870313-1319891i'); //* Here was called constructor and setPassword in it
console.log(userSetGet);
userSetGet.password = 'hfajfkasjl-26352197270218-yrgyirq'; //* Here we call setter password, which calls setPassword in it
setTimeout(() => console.log(userSetGet), 3500);
console.log(userSetGet.password);
