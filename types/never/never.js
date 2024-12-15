function generateError() {
    throw new Error('Error');
}
function infinityLoop() {
    while (true) { }
}
function recursion() {
    return recursion();
}
function refund() { }
function checkout() { }
function proccesAction(action) {
    switch (action) {
        case 'refund':
            refund();
            break; //! if end point(break) - returned type can't be never!!! It's void
        case 'checkout':
            checkout();
            break;
        default:
            var _checking = action;
            throw new Error();
    }
}
function isString(arg) {
    if (typeof arg === 'string')
        return true;
    else if (typeof arg === 'number')
        return false;
    else
        throw new Error('Wrong data: not a number and not a string');
}
