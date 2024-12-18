"use strict";
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
