"use strict";
function isNumber(a) {
    return typeof a === 'number';
}
const userGuard = {
    name: 'Sally',
    login: 'sall@out',
    email: 'sally@out.com'
};
const userAdmin = {
    name: 'Sally',
    role: 'admin'
};
function isAdmin(user) {
    return 'role' in user;
    // return (admin as IAdmin).role !== undefined
}
function setRole(user) {
    if (isAdmin(user)) {
        //! if - user.role = 'admin' - you need 'user is IAdmin' and not 'boolean' SEE Abow
        const role = { ...user, role: 'admin' };
        console.log(role);
        return role;
    }
    else {
        console.log('User is not an Administrator');
    }
}
console.log(isAdmin(userGuard));
console.log(isAdmin(userAdmin));
setRole(userAdmin);
setRole(userGuard);
