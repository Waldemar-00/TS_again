interface ILogger
{
    log ( ...args: unknown[] ): void;
    error( ...args: unknown[] ): void;
}

class CLogger implements ILogger
{
    log ( ...args: unknown[] ): void
    {
        console.log( ...args)
        // throw new Error( "Method not implemented." );
    }
    async error ( ...args: unknown[] ): Promise<void>
    {
        //* some eroor from request
        console.log( ...args )
    }
}