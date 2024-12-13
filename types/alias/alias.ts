type httpMethod = 'POST' | 'GET'
type Post =
{
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}
const _URL_ = 'https://jsonplaceholder.typicode.com/comments/1'
async function httpRequest (url: string, method: httpMethod, body?: Post): Promise<void>
{
    if ( method === 'POST' && body )
    {
       fetch( url, {
            method: method,
            body: JSON.stringify(body)
        }).then(response => response.json()).then(dt => console.log(dt))
    }
    if ( method === 'GET' )
    {
        const response: any = await fetch( url )
        const data: Post = await response.json()
        console.log(data)
    }

}

httpRequest( _URL_, 'GET' )


type User = {
    name: string, //! if both type of name will be literal const user_With_Role will be type: never
    age: number
}
type Role = {
    name: string, //! if both type of name will be literal const user_With_Role will be type: never
    admin: boolean
}
type UserWithRole = User & Role

const user00: User = {
    name: 'John',
    age: 42
}

const role: Role = {
    name: 'Smith',
    admin: true
}
const user_With_Role: UserWithRole = Object.assign( user00, role )
console.log(user_With_Role)
