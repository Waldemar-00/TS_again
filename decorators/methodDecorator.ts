interface IUsersError
{
    users: number
    error(): void
}

class UserError implements IUsersError
{
    constructor ( public users: number ) { }
    @DLog
    error ()
    {
        throw new Error('TEST ERROR')
    }
}
function DLog (
    target: Object, //! instance of UserError
    key: string | symbol,
    descriptor: TypedPropertyDescriptor<(...agrs: any[]) => void>
): TypedPropertyDescriptor<(...agrs: any[]) => void> | void
{
    console.log('Before redefined')
    descriptor.value = () =>
    {
        console.log( target )
        console.log( key )
        console.log( descriptor )
    }
    console.log('After redefined')
}
new UserError(8888).error()