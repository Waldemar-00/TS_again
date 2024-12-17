function isNumber (a: string | number): a is number
{
    return typeof a === 'number'
}

interface IUserGuard
{
    name: string;
    login: string;
    email: string;
}

interface IAdmin
{
    name: string;
    role: string;
}
const userGuard: IUserGuard = {
    name: 'Sally',
    login: 'sall@out',
    email: 'sally@out.com'
}
const userAdmin: IAdmin = {
    name: 'Sally',
    role: 'admin'
}
function isAdmin ( user: IUserGuard | IAdmin ): user is IAdmin //! or boolean but see below
{
    return 'role' in user
    // return (admin as IAdmin).role !== undefined
}

function setRole ( user: IUserGuard | IAdmin ): IAdmin | undefined
{
    if ( isAdmin( user ) )
    {
        //! if - user.role = 'admin' - you need 'user is IAdmin' and not 'boolean' SEE Abow
        const role: IAdmin = { ...user, role: 'admin' }
        console.log( role )
        return role
    } else
    {
        console.log( 'User is not an Administrator')
    }
}
console.log( isAdmin( userGuard ) )
console.log( isAdmin( userAdmin ) )
setRole( userAdmin )
setRole( userGuard )
