@fabricOfDecorator(777) //! It has worked before constructor
@AdvancedFabric(44444) //! It will work after constructor
class Users77
{
    constructor ( public users: number = 3333) {}

    getUsersAmount() { return this.users }
}

function fabricOfDecorator ( amount: number )
{
    console.log("Init fabricOfDecorator")
    return function (constructor: Function)
    {
        constructor.prototype.users = amount
        console.log("Finish fabricOfDecorator")
    }
}

function AdvancedFabric (users: number)
{
    console.log("Init AdvancedFabric")
    return function <T extends { new( ...args: any[] ): {} }> ( constructor: T )
    {
        console.log("Finish AdvancedFabric")
        return class extends constructor
        {
           users = users
        }
   }
}
const user77 = new Users77()
console.log( user77.users )
console.log( user77.getUsersAmount() )
console.log( user77 )



//* Object { users: 44444 }
//* ​
//* users: 44444
//* ​
//* <prototype>: Object { users: 777, … }
//* ​​
//* constructor: class  {}
//* ​​​
//* length: 0
//* ​​​
//* name: ""
//* ​​​
//* prototype: Object { users: 777, … }
//* ​​​
//* <prototype>: class Users77 { constructor(users) }
//* ​​
//* users: 777
//* ​​
//* <prototype>: Object { … }
//* ​​​
//* constructor: class Users77 { constructor(users) }
//* ​​​
//* getUsersAmount: function getUsersAmount()
//* ​​​​
//* length: 0
//* ​​​​
//* name: "getUsersAmount"
//* ​​​​
//* <prototype>: function ()
//* ​​​
//* <prototype>: Object { … }