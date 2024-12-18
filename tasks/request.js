"use strict";
//! TASK 1
const _URL = 'https://example.com';
var FAQsStatus;
(function (FAQsStatus) {
    FAQsStatus["PUBLISHED"] = "PUBLISHED";
    FAQsStatus["DRAFT"] = "DRAFT";
    FAQsStatus["DELETED"] = "DELETED";
})(FAQsStatus || (FAQsStatus = {}));
const request = {
    "topicId": 5,
    "status": FAQsStatus.PUBLISHED
};
async function getFAQs(req) {
    const res = await fetch(_URL, {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    if (typeof data === 'object' && data?.hasOwnProperty('body'))
        return data;
    else
        throw new Error('Request was failed');
}
const postData = {
    "sum": 10000,
    "from": 2,
    "to": 4
};
var Status;
(function (Status) {
    Status["SUCCESS"] = "SUCCESS";
    Status["FAILED"] = "FAILD";
})(Status || (Status = {}));
async function postAmount(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result;
}
postAmount(_URL, postData);
