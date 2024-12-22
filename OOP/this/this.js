"use strict";
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
