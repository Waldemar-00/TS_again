"use strict";
const done = {
    code: 200,
    data: "Done"
};
const error = {
    code: 500,
    data: new Error("Somthing went wrong...")
};
class CUser77 {
}
class CAdmin77 {
}
function getUserOrAdmin(id) {
    if (typeof id === 'number')
        return new CUser77();
    else
        return new CAdmin77();
}
function getUserOrAdmin2(id) {
    if (typeof id === 'number')
        return new CUser77(); //! It's not good practice
    else
        return new CAdmin77(); //! It's not good practice
}
const gotten_User = getUserOrAdmin2(111);
const gotten_Admin = getUserOrAdmin2('uyqouyeoq9912653OPfd');
