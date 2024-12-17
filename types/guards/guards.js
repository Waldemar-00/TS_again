var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function isNumber(a) {
    return typeof a === 'number';
}
var userGuard = {
    name: 'Sally',
    login: 'sall@out',
    email: 'sally@out.com'
};
var userAdmin = {
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
        var role = __assign(__assign({}, user), { role: 'admin' });
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
