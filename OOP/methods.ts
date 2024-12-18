enum EPayment
{
    HOLDED = 'HOLDED',
    PROCESSED = 'PROCESSED',
    REVERSED = 'REVERSED',
}
class CPayment
{
    id!: number
    status!: EPayment
    createdAt!: Date
    updatedAt!: Date
    constructor ( id: number )
    {
        this.id = id
        this.createdAt = new Date()
        this.status = EPayment.HOLDED
    }
    paymentLifeTime (): number
    {
        return ( new Date().getTime() - this.createdAt.getTime() )
    }
    unholdPayment (): void
    {
        if ( this.status === EPayment.PROCESSED )
        {
            console.log( "The payment cannot be returned!" )
            return
        }
        this.status = EPayment.REVERSED
        this.updatedAt = new Date()

    }
}
const payment_1 = new CPayment( 1 )
payment_1.unholdPayment()
console.log( payment_1 )
console.log(payment_1.paymentLifeTime())