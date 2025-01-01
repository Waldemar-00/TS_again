class Error00
{
    @Catcher()
    errorThrower ()
    {
        throw new Error('OUR TEST ERROR')
    }
}

function Catcher ( rethrow: { rethrow: boolean } = { rethrow: false })
{
    return  (
            _target: Object,
            _key: string | symbol,
            descriptor: TypedPropertyDescriptor<( ...args: any[] ) => any>

            ): TypedPropertyDescriptor<(...args: any[]) => any> | void =>
            {
                try
                {
                    console.log('IN TRY')
                    if ( descriptor.value )
                    {
                        descriptor.value()
                    }
                } catch (error) {
                    if ( error instanceof Error )
                    {
                        console.log(error.message)
                    }
                    if ( rethrow.rethrow )
                    {
                        throw error
                    }
                    descriptor.value = () =>
                    {
                        console.log('I HAVE DONE IT MYSELF!!!')
                    }
                }
            }
}


const error00 = new Error00()

error00.errorThrower()