"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function getFAQs(req) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield fetch(_URL, {
            method: 'POST',
            body: JSON.stringify(req)
        });
        const data = yield res.json();
        if (typeof data === 'object' && (data === null || data === void 0 ? void 0 : data.hasOwnProperty('body')))
            return data;
        else
            throw new Error('Request was failed');
    });
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
function postAmount(url, data) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url, {
            method: 'POST',
            body: JSON.stringify(data)
        });
        const result = yield response.json();
        return result;
    });
}
postAmount(_URL, postData);
