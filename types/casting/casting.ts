let s: string = 'stri7ng'
let n: number = parseInt( s )
console.log( n )

let num: number = 100

let numToString = num.toString()
console.log( numToString )

let numNewString = new String( num )
console.log( numNewString.valueOf() )

const numAs: number = 111
const numAsString = numAs as unknown as string
console.log( typeof numAsString ) //! number