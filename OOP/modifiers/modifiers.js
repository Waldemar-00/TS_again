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
