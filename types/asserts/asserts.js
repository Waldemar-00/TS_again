//* We have an object from some server userFrom
var userFrom = {
// name: 'Susan',
// email: 'sus@gmail.com',
// age: 47
};
function assertUser(obj) {
    if (typeof obj !== 'object' && obj === null && !('name' in obj))
        throw new Error("The object doesn't have a data about user.");
}
assertUser(userFrom);
console.log(userFrom.name);
