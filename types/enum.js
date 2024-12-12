"use strict";
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
