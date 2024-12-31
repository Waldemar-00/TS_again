interface IUsersService_1
{
    users: number
    getUserAmount(): number
}

@NullUsers //! works BEFORE
@FewUsersAdvanced //! work AFTER constructor
class CUserService_1 implements IUsersService_1
{
    //! NullUsers will be called before the constructor below
    constructor ( public users: number = 1110000)
    {
        console.log('Constructor WORKS', this.users)
        this.users = users
    }
    getUserAmount (): number
    {
        return this.users
    }
}

function NullUsers ( constructor: Function ) //! we work with prototype (function constructor)
{
    constructor.prototype.users = 0
    console.log( `You reset amount of the service users to ${constructor.prototype.users}` ) //! gets users from prototype before the constructor will be called
}
function FewUsersAdvanced<T extends {new ( ...args: any[] ): {}}> ( constructor: T ) //! create and return new anonymous class
{
    return class extends constructor
    {
        users = 333
    }
}
console.log(new CUserService_1().getUserAmount())