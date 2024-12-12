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
// const request: OurRequest = {
// 	"topicId": 5,
// 	"status": "published"
// }
const _URL = 'https://jsonplaceholder.typicode.com/comments/1';
// async function getFAQs<T extends OurRequest>(req: T): Promise<unknown> | never {
// 	const res = await fetch(_URL, {
// 		method: 'POST',
// 		body: JSON.stringify(req)
// 	});
//     const data: unknown = await res.json()
//     if(typeof data === 'object' && data?.hasOwnProperty('body')) return data as Post
// 	else throw new Error('Request was failed')
// }
// getFAQs<OurRequest>( request )
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
getFAQs(request);
// "question": "Как осуществляется доставка?",
//     "answer": "быстро!",
//     "tags": [
//         "popular",
//         "new"
//     ],
//     "likes": 3,
//     "status": "published"
//    "postId": 1,
//     "id": 1,
//     "name": "id labore ex et quam laborum",
//     "email": "Eliseo@gardner.biz",
//     "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
