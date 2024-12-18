"use strict";
async function getData(url) {
    try {
        const res = await fetch(url);
        const result = await res.json();
        if (result.status !== 200)
            throw new Error('I have broken the URL! :)))');
        console.log(result);
        return result;
    }
    catch (error) {
        if (error instanceof Error)
            console.log(error.message);
        else if (typeof error === 'string' || 'number')
            console.log(error);
    }
}
getData('https://jsonplaceholder.typicode.com/comment');
