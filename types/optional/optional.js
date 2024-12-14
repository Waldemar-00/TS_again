"use strict";
const something = {
    id: 111,
    data: {},
    owner: 'ULADZIMIR',
};
function multiply(a, b = 5) {
    if (!a)
        return b * b;
    else
        return a * b;
}
