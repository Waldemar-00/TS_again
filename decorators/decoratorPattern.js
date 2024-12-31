"use strict";
class CUserService {
    constructor(users = 0) {
        this.users = users;
        this.users = users;
    }
    getUserAmount() {
        return this.users;
    }
}
function updateUsers(obj, users) {
    obj.users = users;
    return obj;
}
function logUsers(obj) {
    console.log(` Our service has users: ${obj.users}`);
    return obj;
}
console.log(new CUserService().getUserAmount());
console.log(updateUsers(new CUserService(), 1000).getUserAmount());
logUsers((updateUsers(new CUserService(), 1000)));
const ourClass = new CUserService();
updateUsers(ourClass, 7000);
logUsers(ourClass);
