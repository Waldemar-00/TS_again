interface IUser  {
    name: string,
    age: number
}
interface IRole {
    name: string,
    admin: boolean,
    log(): string
}
interface IUserWithRole extends IUser, IRole {
     //! if only one type of name will be literal TS throw error: Interface 'IUserWithRole' cannot simultaneously extend types 'IUser' and 'IRole'. Named property 'name' of types 'IUser' and 'IRole' are not identical.
}

const user11: IUser = {
    name: 'John',
    age: 42
}

const role11: IRole = {
    name: 'Smith',
    admin: true,
    log() {
        return `${this.name} is ${this.admin}`
    }
}
const user_With_Role11: IUserWithRole = Object.assign( user11, role11 )
console.log(user_With_Role11)
