"use strict";
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
