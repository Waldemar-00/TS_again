class User_ex
{
    name: string
    constructor ( name: string )
    {
        this.name = name
    }
}

class Users extends Array<User_ex>
{
    searchByName (name: string)
    {
        return this.filter(u => u.name === name)
    }
}

const users = new Users()
console.log( users ) //!!! TOO MANY methods from class Array. We don't need them here!!!

//! BETTER COMPOSTION

class UserList
{
    users: User_ex[]

    constructor(u: User_ex[]) {
        this.users = u
    }
    push ( u: User_ex )
    {
        this.users.push(u)
    }
}
const userList = new UserList([])
console.log( userList.push( new User_ex( 'John' ) ) )
console.log( userList.push( new User_ex("Sally") ) )
console.log( userList )

//! subject area - COMPOSITION

class User11
{
    name: string
    constructor ( name: string )
    {
        this.name = name
    }
}

class Payment11
{
    date: Date
    constructor ( date: Date )
    {
        this.date = date
    }
}

class UserPayment
{
    user: User11
    payment: Payment11

    constructor ( user: User11, payment: Payment11 )
    {
        this.user = user
        this.payment = payment
    }
}
const userPayment = new UserPayment( new User11( 'John' ), new Payment11( new Date() ) )
console.log( userPayment.payment )