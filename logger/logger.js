"use strict";
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
