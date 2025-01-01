class UsersWithLimit
{
    @DMaxUsers(100)
    public users: number = 200 //! @DMaxUsers(100) calls after constructor!!!
}

function DMaxUsers ( max: number )
{
    return   (
        target: Object,
        key: string | symbol
    ) =>
    {
        let value: number
        const getter = () => value
        const setter = ( newValue: number ) =>
        {
            if ( newValue <= max )
            {
                value = newValue
            } else
            {
                console.log( `You cannot set value more than maximum: ${ max }!!!` )
            }
        }

        Object.defineProperty( target, key, {
            set: setter,
            get: getter
        })
    }
}

const maxUsers = new UsersWithLimit()

maxUsers.users = 1000
maxUsers.users = 77
console.log( maxUsers.users )
