"use strict";
const data = [
    { id: 2, name: 'Петя' },
    { id: 1, name: 'Вася' },
    { id: 3, name: 'Надя' },
];
const sortById = function (data, how) {
    if (how === 'asc')
        data.sort((a, b) => a.id - b.id);
    if (how === 'desc')
        data.sort((a, b) => b.id - a.id);
    return data;
};
console.log(sortById(data, 'asc'));
console.log(sortById(data, 'desc'));
