import 'reflect-metadata'
const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY')
class Meta
{
    constructor ( public users: number ) { }

    @ValidatePlus()
    changeUsersAmount ( @Positive() users: number ): void
    {
        this.users = users
    }
}

function Positive ()
{
    return (
        target: Object,
        key: string,
        index: number
    ) =>
    {
        // console.log( Reflect.getOwnMetadata( "design:type", target, key ) )
        // console.log( Reflect.getOwnMetadata( "design:paramtypes", target, key ) )
        // console.log( Reflect.getOwnMetadata( "design:returntype", target, key ) )
        //! you can get: "design:type", "design:paramtypes", "design:returntype"
        let existParams: number[] = Reflect.getOwnMetadata( POSITIVE_METADATA_KEY, target, key ) || []
        existParams.push( index )
        Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, key)
    }
}

function ValidatePlus ()
{
    return (
        target: Object,
        key: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
    ) =>
    {
        let changeUsersAmount = descriptor.value
        descriptor.value = function (...args: any[])
        {
            let params: number[] = Reflect.getOwnMetadata( POSITIVE_METADATA_KEY, target, key )
            if ( params.length > 0 )
            {
                params.forEach( ( index ) =>
                {
                    try {
                        if ( args[ index ] < 0 ) throw new Error( `The argument: ${args[index]} is less than 0... It must be more than 0! ` )
                        else return  changeUsersAmount?.apply( this, args )
                    } catch (error) {
                        if(error instanceof Error) console.log(error.message)
                    }
                })
            }
        }
    }
}

const meta = new Meta( 10 )
meta.changeUsersAmount( -1100 )
meta.changeUsersAmount( 100 )
console.log(meta.users)