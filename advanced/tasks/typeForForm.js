"use strict";
const form = {
    name: 'ULADZIMIR',
    password: 'some string with numbers',
};
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'The password must have more than 8 characters' }
};
