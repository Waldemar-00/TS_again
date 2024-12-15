var N = null;
var nAny = null;
function getUser() {
    if (Math.random() > 0.5) {
        var user = { name: 'VALDEMAR' };
        return user;
    }
    else
        return null;
}
var gottenUser = getUser();
console.log(gottenUser);
