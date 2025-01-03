"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
class CUser {
    constructor(nameOrAge, age) {
        if (typeof nameOrAge === "string")
            this.name = nameOrAge;
        else if (typeof nameOrAge === "number")
            this.age = nameOrAge;
        if (typeof age === "number")
            this.age = age;
    }
}
const user_1 = new CUser();
const user_2 = new CUser(42);
const user_3 = new CUser('ULADZIMIR');
const user_4 = new CUser('ULADZIMIR', 42);
console.log(user_1);
console.log(user_2);
console.log(user_3);
console.log(user_4);
//! "strictPropertyInitialization": false -- if you need to use class like an interface
//! else use '!' -- role!: boolean
class CAdmin {
}
const admin_1 = new CAdmin();
console.log(admin_1.role = true);
class CUserWithGetterSetter {
    constructor(login, password) {
        this._login = `User-${login}`;
        this.setPassword(password);
        this.loginAt = new Date();
    }
    get login() {
        return this._login;
    }
    set login(myLogin) {
        this._login = `User-${myLogin}`;
        this.loginAt = new Date();
    }
    get password() {
        return `Anyone cannot get a password!`;
    }
    set password(pass) {
        this.setPassword(pass);
    }
    async setPassword(pass) {
        //* secure the password and then
        setTimeout(() => {
            this._password = pass;
            console.log('secure');
        }, 2000);
    }
}
const userSetGet = new CUserWithGetterSetter('U77', '1870313-1319891i'); //* Here was called constructor and setPassword in it
console.log(userSetGet);
userSetGet.password = 'hfajfkasjl-26352197270218-yrgyirq'; //* Here we call setter password, which calls setPassword in it
setTimeout(() => console.log(userSetGet), 3500);
console.log(userSetGet.password);
var EPayment;
(function (EPayment) {
    EPayment["HOLDED"] = "HOLDED";
    EPayment["PROCESSED"] = "PROCESSED";
    EPayment["REVERSED"] = "REVERSED";
})(EPayment || (EPayment = {}));
class CPayment {
    constructor(id) {
        this.id = id;
        this.createdAt = new Date();
        this.status = EPayment.HOLDED;
    }
    paymentLifeTime() {
        return (new Date().getTime() - this.createdAt.getTime());
    }
    unholdPayment() {
        if (this.status === EPayment.PROCESSED) {
            console.log("The payment cannot be returned!");
            return;
        }
        this.status = EPayment.REVERSED;
        this.updatedAt = new Date();
    }
}
const payment_1 = new CPayment(1);
payment_1.unholdPayment();
console.log(payment_1);
console.log(payment_1.paymentLifeTime());
class CUserWithSkills {
    constructor(skillOrSkills) {
        this.skills = [];
        if (typeof skillOrSkills === "string")
            this.skills = [...this.skills, skillOrSkills];
        else if (Array.isArray(skillOrSkills))
            this.skills = [...this.skills, ...skillOrSkills];
    }
    addSkill(skillOrSkills) {
        if (typeof skillOrSkills === 'string')
            this.skills = [...this.skills, skillOrSkills];
        else if (Array.isArray(skillOrSkills))
            this.skills = [...this.skills, ...skillOrSkills];
    }
}
const userWithSkills = new CUserWithSkills('DevOps');
console.log(userWithSkills.addSkill('Dev'));
console.log(userWithSkills.addSkill('Front-End'));
console.log(userWithSkills);
class Controller {
    handleWithLogs(request) {
        console.log('START');
        this.handle(request);
        console.log('END');
    }
}
class UserController extends Controller //! required implementation of Controller
 {
    handle(request) {
        console.log(request);
    }
}
const userController = new UserController();
userController.handle('Request');
userController.handleWithLogs('Request');
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    paid() {
        this.status = "completed";
    }
}
const payment = new Payment(11);
console.log(payment.id);
class SavedPayment extends Payment {
    constructor(dbId, completedAt) {
        const id = Math.random() * 10;
        super(id);
        this.dbId = dbId;
        this.completedAt = completedAt;
    }
    paid(date) {
        super.paid();
        if (date)
            this.completedAt = date;
    }
    save() {
        //* POST-fetch to DB
    }
}
const savedPayment = new SavedPayment(7798, new Date());
console.log(savedPayment.id);
console.log(savedPayment.dbId);
class HTTPSError extends Error {
    constructor(message, code = 500) {
        super(message);
        this.code = code;
    }
}
class User_ex {
    constructor(name) {
        this.name = name;
    }
}
class Users extends Array {
    searchByName(name) {
        return this.filter(u => u.name === name);
    }
}
const users = new Users();
console.log(users); //!!! TOO MANY methods from class Array. We don't need them here!!!
//! BETTER COMPOSTION
class UserList {
    constructor(u) {
        this.users = u;
    }
    push(u) {
        this.users.push(u);
    }
}
const userList = new UserList([]);
console.log(userList.push(new User_ex('John')));
console.log(userList.push(new User_ex("Sally")));
console.log(userList);
//! subject area - COMPOSITION
class User11 {
    constructor(name) {
        this.name = name;
    }
}
class Payment11 {
    constructor(date) {
        this.date = date;
    }
}
class UserPayment {
    constructor(user, payment) {
        this.user = user;
        this.payment = payment;
    }
}
const userPayment = new UserPayment(new User11('John'), new Payment11(new Date()));
console.log(userPayment.payment);
async function resolvePromise(arg) {
    const r = await new Promise((resolve, reject) => resolve(arg));
    return r;
}
resolvePromise(177).then(arg => console.log(arg));
resolvePromise('string').then(arg => console.log(arg));
resolvePromise(true).then(arg => console.log(arg));
const record = {
    some: true,
    other: false,
    abc: true
};
function getHalfOfArray(array) {
    array.length = array.length / 2;
    return array;
}
console.log(getHalfOfArray(['a', 'b', 'c', 'd']));
class VihicleRun {
    constructor(run, miles = 0) {
        this.run = run;
        this.miles = miles;
        this.run = run;
        this.miles = miles;
    }
}
function kmToMiles(vihicle) {
    vihicle.miles = Math.round(vihicle.run / 0.6);
    return vihicle;
}
const vihicleRun = new VihicleRun(100);
console.log(kmToMiles(vihicleRun));
const logLine = {
    timeStamp: new Date(),
    data: {
        a: 10
    }
};
const logLineLiteral = {
    timeStamp: new Date(),
    data: {
        a: 10
    }
};
const someFunction = function (arg) {
    return arg[0];
};
const someArrayFunction = (arg) => {
    return arg[0];
};
class Resp7 {
    constructor(data, error) {
        if (data)
            this.data = data;
        if (error)
            this.error = error;
    }
}
const resp7 = new Resp7('gotten data', 500);
console.log(resp7);
class RespStatus extends Resp7 {
    constructor(status) {
        super();
        this.status = status;
    }
}
const respStatus = new RespStatus('OK');
console.log(respStatus);
//! function to string
function dataToString(data) {
    switch (typeof data) {
        case "string":
            return data;
        case "number":
        case "boolean":
        case "bigint":
        case "symbol":
        case "function":
            return data.toString();
        case "object":
            return JSON.stringify(data).toString();
        default:
            return "undefined";
    }
    // if ( typeof data === 'function' ) return data.toString()
    // if ( typeof data === 'symbol' ) return data.toString()
    // if(typeof data === 'bigint') return data
    // if(data === undefined) return 'undefined'
    // return JSON.stringify( data ).toString()
}
console.log(dataToString(null));
console.log(dataToString(10n));
console.log(dataToString(undefined));
console.log(dataToString(Symbol('s')));
console.log(dataToString(function fn() { }));
console.log(dataToString(true));
console.log(dataToString("string"));
console.log(dataToString(177));
console.log(dataToString({ a: 111 }));
console.log(dataToString(['a', 2]));
console.log(dataToString({
    "userId": 5,
    "id": 43,
    "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
    "body": "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
}));
class CLogger {
    log(...args) {
        console.log(...args);
        // throw new Error( "Method not implemented." );
    }
    async error(...args) {
        //* some eroor from request
        console.log(...args);
    }
}
//! CONSTRUCTOR type of the Classes - see below
class List {
    constructor(items) {
        this.items = items;
    }
}
function MixinExtendedList(BaseClass) {
    return class ExtendedList extends BaseClass {
        getList() { return this.items; }
    };
}
class BaseClass {
    setList(arg) { this.items = arg; }
}
const MixinClass = MixinExtendedList(BaseClass);
const someInstanceFromMixinClass = new MixinClass();
someInstanceFromMixinClass.setList(['first', 'second', 'MIXIN']);
console.log(someInstanceFromMixinClass.getList());
var _Vehicle_private;
class Vehicle {
    constructor(type, demages, run, _priv) {
        this.type = type;
        this.demages = demages;
        this.run = run;
        _Vehicle_private.set(this, void 0);
        this.type = type;
        this.run = run;
        this.demages = demages;
        __classPrivateFieldSet(this, _Vehicle_private, _priv, "f");
    }
    addDemag(d) {
        this.demages.push(d);
    }
    get demag() {
        return this.demages;
    }
    set demag(ds) {
        this.demages = ds;
    }
    log() { console.log(this.run); }
    getPrivate() { return __classPrivateFieldGet(this, _Vehicle_private, "f"); }
    //! You can do that, see below
    isPrivateEqual(v) { return __classPrivateFieldGet(this, _Vehicle_private, "f") === __classPrivateFieldGet(v, _Vehicle_private, "f"); }
}
_Vehicle_private = new WeakMap();
const vihicle = new Vehicle('bus', ['wheel', 'engine'], 121000, 'secure');
console.log(vihicle.getPrivate());
vihicle.log();
class Vihicles extends Vehicle {
    constructor(vihicles, type, demages, run, _priv) {
        super(type, demages, run, _priv);
        this.vihicles = vihicles;
    }
    logRun() { return this.run; }
}
const vihicles = new Vihicles(['bus', 'car', 'ship'], 'bus', ['wheel', 'engine'], 122000, 'SECURITY');
console.log(vihicles.getPrivate());
//! vihicles.run  - Property 'run' is protected and only accessible within class 'Vihicle' and its subclasses
//! vihicles.demages - Property 'demages' is private and only accessible within class 'Vihicle'
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
class This {
    constructor() {
        this.date = new Date();
        this.getDateArrow = () => this.date;
    }
    getDate() { return this.date; } //! if: this: This - you see the TS error below
}
const th = new This();
// console.log( th.getDate() )
// const someData = {
//     id: 177,
//     someDate: th.getDate() IT's work
// }
// console.log( someData.someDate)  IT's work
const someData = {
    id: 177,
    someDate: th.getDate.bind(th), //! REDEFINITION to fn someDate
    someDateArrow: th.getDateArrow
};
// console.log( someData.someDate() ) //! return UNDEFINED
// console.log( someData.someDateArrow())
class AnotherThis extends This {
    returnDate() {
        return super.getDate();
    }
    returnArrowDate() {
        return this.getDateArrow();
    }
}
const anotherThis = new AnotherThis();
console.log(anotherThis.returnDate());
console.log(anotherThis.returnArrowDate());
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdminBuilder() { return this instanceof AdminBuilder; }
}
const userBuilder = new UserBuilder();
userBuilder.setName('ULADZIMIR');
class AdminBuilder extends UserBuilder {
}
const adminBuilder = new AdminBuilder().setName('Waldemer'); //! const adminBuilder: AdminBuilder if setName returns this, else -- UserBuilder, see above
let user_u = new UserBuilder().setName('Sally');
if (user_u.isAdminBuilder())
    console.log(user_u.roles);
else
    console.log(user_u.name);
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
const roles = ['user', 'admin', 'super-user'];
const userObject = {
    user: 'John',
    age: 24,
    permissions: {
        manager: true
    }
};
let someNumber = 119900;
function libraryFn(message, transaction) {
    console.log(message, transaction);
}
const transaction = {
    fromTo: ['one', 'two'] //! first: as [string, string]
};
libraryFn('Hello Infer', transaction);
const keyAge = "age";
const keyName = "name";
const object = {
    name: 'John',
    age: 100
};
const nameFromObject = "name";
const ageFromObject = "age";
function getProperty(object, key) {
    return object[key];
}
console.log(getProperty(object, "name"));
const urlErorr = {
    url: "https://ERROR"
};
var Entities;
(function (Entities) {
    Entities[Entities["Item"] = 0] = "Item";
    Entities[Entities["Entity"] = 1] = "Entity";
    Entities[Entities["Something"] = 2] = "Something";
})(Entities || (Entities = {}));
const groupData = [
    { group: 1, name: 'a' },
    { group: 1, name: 'b' },
    { group: 2, name: 'c' },
    { group: 2, name: 'd' },
    { group: 2, name: 'e' },
    { group: 3, name: 'f' },
];
function regrouping(array, key) {
    const returnedObject = {};
    array.forEach((obj) => {
        const localKey = obj[key];
        if (localKey in returnedObject) {
            returnedObject[localKey].push(obj);
        }
        else {
            returnedObject[localKey] = [];
            returnedObject[localKey].push(obj);
        }
    });
    return returnedObject;
}
console.log(regrouping(groupData, "group"));
const form = {
    name: 'ULADZIMIR',
    password: 'some string with numbers',
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'The password must have more than 8 characters' }
};
class Product {
    constructor(productList) {
        this.productList = productList;
    }
}
class Delivery {
    constructor(delivery) {
        this.delivery = delivery;
    }
}
class Cart {
    constructor(productList, delivery) {
        this.totalPrice = 0;
        this.delivery = delivery;
        this.products = productList;
    }
    addProduct(product) {
        this.products.productList.push(product);
    }
    deleteProduct(id) {
        this.products.productList = this.products.productList.filter((prod) => prod.id !== id);
    }
    getTotalPrice() {
        this.totalPrice = 0;
        this.products.productList.forEach(prod => this.totalPrice += prod.price);
    }
    sendDelivery() {
        if ('id' in this.delivery.delivery)
            return `Send the product in the Store with number: ${this.delivery.delivery.id} on ${this.delivery.delivery.date}`;
        else if (this.delivery.delivery.hasOwnProperty('address'))
            return `Send the product to the Owner on address: ${this.delivery.delivery.address}, on ${this.delivery.delivery.date}`;
    }
    ckechData() {
        if (this.products.productList.length === 0)
            return `You need to put products in the cart!`;
        if (!this.delivery)
            return `You need to add an address!`;
        if (this.products && this.delivery)
            return `All right. We have all the data for making a delivery!`;
    }
}
const prodactsData = [
    {
        id: 77,
        name: 'banana',
        price: 5.45
    },
    {
        id: 121,
        name: 'apple',
        price: 2.93
    },
    {
        id: 987,
        name: 'pineapple',
        price: 7.88
    }
];
const deliveryStore = {
    date: new Date(2025, 0, 6, 15, 0),
    id: 987
};
const deliveryOwner = {
    date: new Date(2024, 11, 30, 17, 45),
    address: 'Mensk'
};
const cart = new Cart(new Product(prodactsData), new Delivery(deliveryStore));
const cart2 = new Cart(new Product(prodactsData), new Delivery(deliveryOwner));
cart.addProduct({
    id: 400,
    name: 'potato',
    price: 1.2
});
cart.getTotalPrice();
console.log(cart.totalPrice);
cart.deleteProduct(77);
console.log(cart.delivery);
console.log(cart.products);
console.log('_________________________');
console.log(cart.ckechData(), cart.sendDelivery());
console.log(cart2.ckechData(), cart2.sendDelivery());
class Accessor {
    get users() {
        return this._users;
    }
    set users(value) {
        this._users = value;
    }
}
__decorate([
    accessorDecorator(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], Accessor.prototype, "users", null);
const accessor = new Accessor();
function accessorDecorator() {
    return (target, _key, descriptor) => {
        const get = descriptor.get;
        const set = descriptor.set;
        descriptor.get = () => {
            console.log('New getter____');
            return get?.apply(target);
        };
        descriptor.set = (...args) => {
            console.log('New setter____');
            set?.apply(target, args);
        };
    };
}
accessor.users = 7;
console.log(accessor.users);
let CUserService_1 = class CUserService_1 {
    //! NullUsers will be called before the constructor below
    constructor(users = 1110000) {
        this.users = users;
        console.log('Constructor WORKS', this.users);
        this.users = users;
    }
    getUserAmount() {
        return this.users;
    }
};
CUserService_1 = __decorate([
    NullUsers //! works BEFORE
    ,
    FewUsersAdvanced //! work AFTER constructor
    ,
    __metadata("design:paramtypes", [Number])
], CUserService_1);
function NullUsers(constructor) {
    constructor.prototype.users = 0;
    console.log(`You reset amount of the service users to ${constructor.prototype.users}`); //! gets users from prototype before the constructor will be called
}
function FewUsersAdvanced(constructor) {
    return class extends constructor {
        constructor() {
            super(...arguments);
            this.users = 333;
        }
    };
}
console.log(new CUserService_1().getUserAmount());
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
let Users77 = class Users77 {
    constructor(users = 3333) {
        this.users = users;
    }
    getUsersAmount() { return this.users; }
};
Users77 = __decorate([
    fabricOfDecorator(777) //! It has worked before constructor
    ,
    AdvancedFabric(44444) //! It will work after constructor
    ,
    __metadata("design:paramtypes", [Number])
], Users77);
function fabricOfDecorator(amount) {
    console.log("Init fabricOfDecorator");
    return function (constructor) {
        constructor.prototype.users = amount;
        console.log("Finish fabricOfDecorator");
    };
}
function AdvancedFabric(users) {
    console.log("Init AdvancedFabric");
    return function (constructor) {
        console.log("Finish AdvancedFabric");
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.users = users;
            }
        };
    };
}
const user77 = new Users77();
console.log(user77.users);
console.log(user77.getUsersAmount());
console.log(user77);
//* Object { users: 44444 }
//* ​
//* users: 44444
//* ​
//* <prototype>: Object { users: 777, … }
//* ​​
//* constructor: class  {}
//* ​​​
//* length: 0
//* ​​​
//* name: ""
//* ​​​
//* prototype: Object { users: 777, … }
//* ​​​
//* <prototype>: class Users77 { constructor(users) }
//* ​​
//* users: 777
//* ​​
//* <prototype>: Object { … }
//* ​​​
//* constructor: class Users77 { constructor(users) }
//* ​​​
//* getUsersAmount: function getUsersAmount()
//* ​​​​
//* length: 0
//* ​​​​
//* name: "getUsersAmount"
//* ​​​​
//* <prototype>: function ()
//* ​​​
//* <prototype>: Object { … }
class UserError {
    constructor(users) {
        this.users = users;
    }
    error() {
        throw new Error('TEST ERROR');
    }
}
__decorate([
    DLog,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserError.prototype, "error", null);
function DLog(target, //! instance of UserError
key, descriptor) {
    console.log('Before redefined');
    descriptor.value = () => {
        console.log(target);
        console.log(key);
        console.log(descriptor);
    };
    console.log(' redefined');
}
new UserError(8888).error();
define("decorators/parameterDecorator", ["require", "exports", "reflect-metadata"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');
    class Meta {
        constructor(users) {
            this.users = users;
        }
        changeUsersAmount(users) {
            this.users = users;
        }
    }
    __decorate([
        ValidatePlus(),
        __param(0, Positive()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Number]),
        __metadata("design:returntype", void 0)
    ], Meta.prototype, "changeUsersAmount", null);
    function Positive() {
        return (target, key, index) => {
            // console.log( Reflect.getOwnMetadata( "design:type", target, key ) )
            // console.log( Reflect.getOwnMetadata( "design:paramtypes", target, key ) )
            // console.log( Reflect.getOwnMetadata( "design:returntype", target, key ) )
            //! you can get: "design:type", "design:paramtypes", "design:returntype"
            let existParams = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, key) || [];
            existParams.push(index);
            Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, key);
        };
    }
    function ValidatePlus() {
        return (target, key, descriptor) => {
            let changeUsersAmount = descriptor.value;
            descriptor.value = function (...args) {
                let params = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, key);
                if (params.length > 0) {
                    params.forEach((index) => {
                        try {
                            if (args[index] < 0)
                                throw new Error(`The argument: ${args[index]} is less than 0... It must be more than 0! `);
                            else
                                return changeUsersAmount?.apply(this, args);
                        }
                        catch (error) {
                            if (error instanceof Error)
                                console.log(error.message);
                        }
                    });
                }
            };
        };
    }
    const meta = new Meta(10);
    meta.changeUsersAmount(-1100);
    meta.changeUsersAmount(100);
    console.log(meta.users);
});
class UsersWithLimit {
    constructor() {
        this.users = 200; //! @DMaxUsers(100) calls after constructor!!!
    }
}
__decorate([
    DMaxUsers(100),
    __metadata("design:type", Number)
], UsersWithLimit.prototype, "users", void 0);
function DMaxUsers(max) {
    return (target, key) => {
        let value;
        const getter = () => value;
        const setter = (newValue) => {
            if (newValue <= max) {
                value = newValue;
            }
            else {
                console.log(`You cannot set value more than maximum: ${max}!!!`);
            }
        };
        Object.defineProperty(target, key, {
            set: setter,
            get: getter
        });
    };
}
const maxUsers = new UsersWithLimit();
maxUsers.users = 1000;
maxUsers.users = 77;
console.log(maxUsers.users);
function DUniversal(name) {
    console.log("Initialization " + name);
    return function () {
        console.log("Calling: " + name);
    };
}
let MyClass = class MyClass {
    method(_) { }
    static staticMethod(_) { }
    constructor(_) { }
};
__decorate([
    DUniversal('PROPERTY'),
    __metadata("design:type", Object)
], MyClass.prototype, "property", void 0);
__decorate([
    DUniversal('METHOD'),
    __param(0, DUniversal("PARAMETER")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], MyClass.prototype, "method", null);
__decorate([
    DUniversal('STATIC_property'),
    __metadata("design:type", Object)
], MyClass, "staticProperty", void 0);
__decorate([
    DUniversal('STATIC_method'),
    __param(0, DUniversal("STATIC_parameter")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], MyClass, "staticMethod", null);
MyClass = __decorate([
    DUniversal('CLASS'),
    __param(0, DUniversal("CONSTRUCTOR_parameter")),
    __metadata("design:paramtypes", [Object])
], MyClass);
// Initialization PROPERTY
// Calling: PROPERTY
// Initialization METHOD
// Initialization PARAMETER
// Calling: PARAMETER
// Calling: METHOD
// Initialization STATIC_property
// Calling: STATIC_property
// Initialization STATIC_method
// Initialization STATIC_parameter
// Calling: STATIC_parameter
// Calling: STATIC_method
// Initialization CLASS
// Initialization CONSTRUCTOR_parameter
// Calling: CONSTRUCTOR_parameter
// Calling: CLASS
let Ship = class Ship {
    constructor(name, volume) {
        this.name = name;
        this.volume = volume;
    }
};
Ship = __decorate([
    FDСreatedAt(),
    __metadata("design:paramtypes", [String, Number])
], Ship);
function FDСreatedAt() {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.createdAt = new Date().toTimeString();
            }
        };
    };
}
const ship001 = new Ship('Ice Volat', 200000);
if (ship001.createdAt) {
    console.log(ship001.createdAt);
}
if (ship001.createdAt) {
    console.log(ship001.createdAt);
}
console.log(ship001.createdAt);
console.log(ship001.createdAt);
console.log(ship001.createdAt);
class Error00 {
    errorThrower() {
        throw new Error('OUR TEST ERROR');
    }
}
__decorate([
    Catcher(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Error00.prototype, "errorThrower", null);
function Catcher(rethrow = { rethrow: false }) {
    return (_target, _key, descriptor) => {
        try {
            console.log('IN TRY');
            if (descriptor.value) {
                descriptor.value();
            }
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(error.message);
            }
            if (rethrow.rethrow) {
                throw error;
            }
            descriptor.value = () => {
                console.log('I HAVE DONE IT MYSELF!!!');
            };
        }
    };
}
const error00 = new Error00();
error00.errorThrower();
class Logger {
    printDate(date) {
        this.log(date.toTimeString());
    }
}
class WithDate extends Logger {
    log(message) {
        if (true)
            console.log(message);
    }
    logWithDate(message) {
        this.printDate(new Date());
        this.log(message);
    }
}
const withDate = new WithDate();
withDate.logWithDate('Abstract class and his method log');
/// <reference path="">
console.log(A.o.a);
var A;
(function (A) {
    A.o = { a: 7 };
})(A || (A = {}));
console.log(A.o.a);
//! Partial
//! Required
//! Readonly
//! Omit
//! Pick
//! Exstract
//! Exclude
const sym = Symbol('sym');
//! ReturnType
//! Parameters
//! ConstructorParameters
//! InstanceType
class UserServices {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.id = id;
        this.name = name;
    }
}
function createData(id, name) {
    return new UserServices(id, name);
}
async function getMenuFromServer() {
    return [{ name: 'Analitics', url: 'https://analitics.com' }];
}
async function getArray(fn) {
    return [await fn];
}
var PaymentStatus;
(function (PaymentStatus) {
    PaymentStatus["Success"] = "success";
    PaymentStatus["Failed"] = "failed";
})(PaymentStatus || (PaymentStatus = {}));
function isSuccess(response) {
    return response.status === PaymentStatus.Success;
}
function getId(response) {
    if (isSuccess(response))
        return response.data.databaseId;
    else
        throw new Error(response.data.errorMessage);
}
//! TASK 1
const _URL = 'https://example.com';
var FAQsStatus;
(function (FAQsStatus) {
    FAQsStatus["PUBLISHED"] = "PUBLISHED";
    FAQsStatus["DRAFT"] = "DRAFT";
    FAQsStatus["DELETED"] = "DELETED";
})(FAQsStatus || (FAQsStatus = {}));
const request = {
    "topicId": 5,
    "status": FAQsStatus.PUBLISHED
};
async function getFAQs(req) {
    const res = await fetch(_URL, {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    if (typeof data === 'object' && data?.hasOwnProperty('body'))
        return data;
    else
        throw new Error('Request was failed');
}
const postData = {
    "sum": 10000,
    "from": 2,
    "to": 4
};
var Status;
(function (Status) {
    Status["SUCCESS"] = "SUCCESS";
    Status["FAILED"] = "FAILD";
})(Status || (Status = {}));
async function postAmount(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}
postAmount(_URL, postData);
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
const skills = ['dev', 'DevOps', 'mover'];
skills.forEach(s => console.log(s.toLocaleUpperCase()));
const itSkills = skills
    .filter(s => s !== 'mover')
    .map(s => s.toLocaleUpperCase() + '! ').reduce((a, b) => a + b);
console.log(itSkills);
var Statuses;
(function (Statuses) {
    Statuses["PENDING"] = "PENDING";
    Statuses["SUCCESS"] = "SUCCESS";
    Statuses["FAILED"] = "FAILED";
})(Statuses || (Statuses = {}));
function logStatus(status) {
    console.log(status);
}
logStatus(Statuses.PENDING);
logStatus(Statuses.SUCCESS);
logStatus(Statuses.FAILED);
function enumLikeObject(arg) {
    console.log(arg);
    console.log(arg.PENDING);
    console.log(arg.SUCCESS);
    console.log(arg.FAILED);
}
enumLikeObject(Statuses);
const ourTest = "SOME" /* Test.SOME */;
function getFullName(name, surname) {
    return `${name} ${surname}`;
}
const getFullNameArrow = (name, surname) => {
    return `${name} ${surname}`;
};
const json = {
    "officeId": 5,
    "isOpened": false,
    "contacts": {
        "phone": "+375297770099",
        "email": 'exampl@tds.com',
        "address": {
            "city": "San Francisco",
        },
    },
    "description": "similique fugit est illum et dolorum harum et voluptate eaque quidem exercitationem quos nam commodi possimus cum odio nihil nulla dolorum exercitationem magnam ex et a et distinctio debitis"
};
const office = json;
console.log(office.contacts.email);
const user = {
    name: 'John',
    surname: 'Smith',
    city: 'San Francisco',
    age: 42
};
function getFullInfo(persona) {
    return `${persona.name} ${persona.surname} ${persona.age} years old, he lives in ${persona.city} `;
}
console.log(getFullInfo(user));
let revenue = 10000;
let bonus = 7000;
let result = revenue + bonus;
console.log(result);
let string = 'string';
let boolean = true;
const tuple = [11, 'WebDev'];
const [id, skillName] = tuple;
//! length in tuples is const, tuple.length = 3 Type '3' is not assignable to type '2'
tuple.push('some');
tuple.forEach(s => console.log(s));
//? ...boolean[]
const tupleArray = [1, 'WebDev', true, false, true]; //? any length
const readonlyTuple = tuple;
const readonlyTupleArray = [222, 'Developer']; //* it is ARRAY!!!!!!
//! readonlyTuple.push(114) Property 'push' does not exist on type 'readonly [number, string]'
//! readonlyTuple[1] = 'something'  Cannot assign to '1' because it is a read-only property.
//! ________________USE TUPLES with __READONLY__ to stop using push___________________
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
//* We have an object from some server userFrom
function assertsNumber(value) {
    if (typeof value !== 'number')
        throw new Error('The value is not a number!');
}
function getValue(value) {
    try {
        assertsNumber(value);
        return `The value is a number: ${value}`;
    }
    catch (error) {
        if (error instanceof Error)
            console.log(error.message);
    }
}
console.log(getValue(111));
console.log(getValue('111'));
const assertedKeys = ['name', 'age', 'email'];
const commingUser = {
    name: 'Sony',
    age: 45,
    email: 'sony@getMaxListeners.com',
    description: 'Lorem ipsum dolor sit amet',
};
function assertsObject(obj) {
    const truth = assertedKeys.every(key => key in obj);
    // const truth = Object.keys( obj as IAssertedUser ).every( (key, index) => key === assertedKeys[index] )
    if (typeof obj === 'object' && obj !== null && truth)
        return;
    else
        throw new Error('Comming object not match our IAssertedUser interface!');
}
assertsObject(commingUser);
console.log(commingUser.email);
let s = 'stri7ng';
let n = parseInt(s);
console.log(n);
let num = 100;
let numToString = num.toString();
console.log(numToString);
let numNewString = new String(num);
console.log(numNewString.valueOf());
const numAs = 111;
const numAsString = numAs;
console.log(typeof numAsString); //! number
const user_diff = {
    name: 'ULADZIMIR',
    age: 42
};
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
const user11 = {
    name: 'John',
    age: 42
};
const role11 = {
    name: 'Smith',
    admin: true,
    log() {
        return `${this.name} is ${this.admin}`;
    }
};
const user_With_Role11 = Object.assign(user11, role11);
console.log(user_With_Role11);
const str = 'str';
const literalString = str;
const objectLiteral = { a: 10 };
const literalObject = objectLiteral;
const arrayLiteral = ['a', 'b', 'c'];
function generateError() {
    throw new Error('Error');
}
function infinityLoop() {
    while (true) { }
}
function recursion() {
    return recursion();
}
function refund() { }
function checkout() { }
function proccesAction(action) {
    switch (action) {
        case 'refund':
            refund();
            break; //! if end point(break) - returned type can't be never!!! It's void
        case 'checkout':
            checkout();
            break;
        default:
            const _checking = action;
            throw new Error();
    }
}
function isString(arg) {
    if (typeof arg === 'string')
        return true;
    else if (typeof arg === 'number')
        return false;
    else
        throw new Error('Wrong data: not a number and not a string');
}
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
const array = [];
function unionTypes(arg) {
    if (typeof arg === 'string')
        console.log(arg.toLocaleUpperCase());
    else if (typeof arg === 'number')
        console.log(arg + 200);
    else
        throw new Error('Argument is not a string or number');
}
unionTypes('String');
unionTypes(1000);
// unionTypes({}) Argument of type '{}' is not assignable to parameter of type 'string | number'
function logObjectProperties(obj) {
    if ('a' in obj)
        console.log(obj.a + 100);
    else
        console.log(obj.b + 200);
}
logObjectProperties({ a: 100 });
logObjectProperties({ b: 100 });
function narrowingSpecialCase(a, b) {
    if (typeof a === typeof b) {
        console.log(`Both arguments have string type: a: ${a}, b: ${b}`);
    }
}
narrowingSpecialCase('A', 'B');
const literalArray = ['a', 'b'];
async function getData(url) {
    try {
        const res = await fetch(url);
        const result = await res.json();
        if (result.status !== 200)
            throw new Error('I have broken the URL! :)))');
        console.log(result);
        return result;
    }
    catch (error) {
        if (error instanceof Error)
            console.log(error.message);
        else if (typeof error === 'string' || 'number')
            console.log(error);
    }
}
getData('https://jsonplaceholder.typicode.com/comment');
const UserSkills = ['DEV', 'DevOps'];
const user_01 = {
    name: 'Peter',
    skills: []
};
UserSkills.forEach(s => user_01.skills.push(s)); //! The push method returns number
