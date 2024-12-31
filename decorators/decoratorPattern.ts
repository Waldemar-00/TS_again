interface IUsersService
{
    users: number
    getUserAmount(): number
}

class CUserService implements IUsersService
{
    constructor ( public users: number = 0)
    {
        this.users = users
    }
    getUserAmount (): number
    {
        return this.users
    }
}

function updateUsers ( obj: IUsersService, users: number ): IUsersService
{
    obj.users = users
    return obj
}
function logUsers ( obj: IUsersService ): IUsersService
{
    console.log( ` Our service has users: ${obj.users}` )
    return obj
}

console.log( new CUserService().getUserAmount() )
console.log( updateUsers( new CUserService(), 1000 ).getUserAmount() )
logUsers((updateUsers( new CUserService(), 1000 )))
const ourClass = new CUserService()

updateUsers( ourClass, 7000 )

logUsers(ourClass)