"use strict";
class UserBuilder {
    setName(name) {
        this.name = name;
        return this;
    }
    isAdminBuilder() { return this instanceof AdminBuilder; }
}
const userBuilder = new UserBuilder();
userBuilder.setName('ULADZIMIR');
class AdminBuilder extends UserBuilder {
}
const adminBuilder = new AdminBuilder().setName('Waldemer'); //! const adminBuilder: AdminBuilder if setName returns this, else -- UserBuilder, see above
let user_u = new UserBuilder().setName('Sally');
if (user_u.isAdminBuilder())
    console.log(user_u.roles);
else
    console.log(user_u.name);
