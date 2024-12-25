"use strict";
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
