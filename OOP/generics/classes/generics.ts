class Resp7<D, E>
{
    public data?: D
    public error?: E
    constructor (data?: D, error?: E)
    {
        if(data)this.data = data;
        if(error)this.error = error;
    }
}

const resp7 = new Resp7<string, number>('gotten data', 500)
console.log( resp7 )

class RespStatus<S> extends Resp7<string, number>
{
    status: S
    constructor ( status: S )
    {
        super()
        this.status = status;
    }
}

const respStatus = new RespStatus<string>( 'OK' )
console.log( respStatus )