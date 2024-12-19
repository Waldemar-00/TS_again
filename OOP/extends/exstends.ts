type TStatus = 'new' | 'running' | 'completed'

class Payment
{
    id: number
    status: TStatus = 'new'
    constructor ( id: number )
    {
        this.id = id;
    }
    paid ()
    {
        this.status = "completed"
    }
}
const payment = new Payment( 11 )
console.log(payment.id)
class SavedPayment extends Payment
{
    dbId: number
    completedAt: Date
    constructor ( dbId: number, completedAt: Date )
    {
        const id = Math.random() * 10
        super(id)
        this.dbId = dbId
        this.completedAt = completedAt

    }
    override paid (date?: Date)
    {
        super.paid()
        if(date) this.completedAt = date
    }
    save ()
    {
        //* POST-fetch to DB
    }

}

const savedPayment = new SavedPayment( 7798, new Date() )
console.log( savedPayment.id )
console.log( savedPayment.dbId )


class HTTPSError extends Error
{
    code: number
    constructor (message: string, code: number = 500 )
    {
        super(message)
        this.code = code
    }
}