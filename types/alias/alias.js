"use strict";
const _URL_ = 'https://jsonplaceholder.typicode.com/comments/1';
async function httpRequest(url, method, body) {
    if (method === 'POST' && body) {
        fetch(url, {
            method: method,
            body: JSON.stringify(body)
        }).then(response => response.json()).then(dt => console.log(dt));
    }
    if (method === 'GET') {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }
}
httpRequest(_URL_, 'GET');
const user00 = {
    name: 'John',
    age: 42
};
const role = {
    name: 'Smith',
    admin: true,
    log() {
        return `${this.name} is ${this.admin}`;
    }
};
const user_With_Role = Object.assign(user00, role);
console.log(user_With_Role);
