"use strict";
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
