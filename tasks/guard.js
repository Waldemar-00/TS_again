"use strict";
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
