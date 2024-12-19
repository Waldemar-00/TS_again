"use strict";
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
