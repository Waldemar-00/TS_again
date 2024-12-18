"use strict";
const N = null;
const nAny = null;
function getUser() {
    if (Math.random() > 0.5) {
        const user = { name: 'VALDEMAR' };
        return user;
    }
    else
        return null;
}
const gottenUser = getUser();
console.log(gottenUser);
