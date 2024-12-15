const N: null = null
const nAny: any = null

interface IUser_00
{
    name: string
}
function getUser (): IUser_00 | null
{
    if ( Math.random() > 0.5 )
    {
        const user: IUser_00 = { name: 'VALDEMAR' }
        return user
    }
    else return null
}

const gottenUser = getUser()
console.log( gottenUser )
