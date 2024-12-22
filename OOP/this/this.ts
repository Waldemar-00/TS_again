class This
{
    private date: Date = new Date()

    getDate ( this: This ) { return this.date } //! if: this: This - you see the TS error below
    getDateArrow = () => this.date
}

const th = new This()
// console.log( th.getDate() )

// const someData = {
//     id: 177,
//     someDate: th.getDate() IT's work
// }
// console.log( someData.someDate)  IT's work

const someData = {
    id: 177,
    someDate: th.getDate.bind( th ), //! REDEFINITION to fn someDate
    someDateArrow: th.getDateArrow
}
// console.log( someData.someDate() ) //! return UNDEFINED
// console.log( someData.someDateArrow())

class AnotherThis extends This
{
    returnDate ()
    {
        return super.getDate()
    }
    returnArrowDate ()
    {
        return this.getDateArrow()
    }
}
const anotherThis = new AnotherThis()
console.log( anotherThis.returnDate() )
console.log(anotherThis.returnArrowDate())