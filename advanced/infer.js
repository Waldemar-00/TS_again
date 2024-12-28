"use strict";
function libraryFn(message, transaction) {
    console.log(message, transaction);
}
const transaction = {
    fromTo: ['one', 'two'] //! first: as [string, string]
};
libraryFn('Hello Infer', transaction);
