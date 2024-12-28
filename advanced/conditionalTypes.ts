interface HttpResponse<T extends "success" | Error>
{
    code: number,
    data: T extends "success" ? "Done" : Error
}


const done: HttpResponse<"success"> = {
    code: 200,
    data: "Done"
}

const error: HttpResponse<Error> = {
    code: 500,
    data: new Error("Somthing went wrong...")
}

class CUser77
{
    id!: number
}
class CAdmin77
{
    dbID!: string
}

function getUserOrAdmin ( id: number ): CUser77
function getUserOrAdmin ( id: string): CAdmin77
function getUserOrAdmin (id: number | string): CUser77 | CAdmin77
{
    if ( typeof id === 'number' ) return new CUser77()
    else return new CAdmin77()
}

type UserOrAdmin<T extends number | string> = T extends number ? CUser77 : CAdmin77

function getUserOrAdmin2<T extends number | string> ( id: T ): UserOrAdmin<T>
{
    if ( typeof id === 'number' ) return new CUser77() as UserOrAdmin<T> //! It's not good practice
    else return new CAdmin77() as UserOrAdmin<T> //! It's not good practice
}

const gotten_User = getUserOrAdmin2( 111 )

const gotten_Admin = getUserOrAdmin2('uyqouyeoq9912653OPfd')