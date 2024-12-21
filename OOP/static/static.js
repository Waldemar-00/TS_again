"use strict";
class UserService {
    constructor(db) {
        UserService.db = db;
    }
    static getDB() {
        return UserService.db;
    }
}
UserService.db = ['static', 'private'];
(() => {
    UserService.db = 'static block';
})();
const u_s = new UserService(['example']);
console.log(u_s);
console.log(UserService.getDB());
