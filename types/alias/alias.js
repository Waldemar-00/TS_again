"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _URL_ = 'https://jsonplaceholder.typicode.com/comments/1';
function httpRequest(url, method, body) {
    return __awaiter(this, void 0, void 0, function* () {
        if (method === 'POST' && body) {
            fetch(url, {
                method: method,
                body: JSON.stringify(body)
            }).then(response => response.json()).then(dt => console.log(dt));
        }
        if (method === 'GET') {
            const response = yield fetch(url);
            const data = yield response.json();
            console.log(data);
        }
    });
}
httpRequest(_URL_, 'GET');
const user00 = {
    name: 'John',
    age: 42
};
const role = {
    name: 'Smith',
    admin: true
};
const user_With_Role = Object.assign(user00, role);
console.log(user_With_Role);
