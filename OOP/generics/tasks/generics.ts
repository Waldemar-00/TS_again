//! function to string

function dataToString<T> ( data: T ): string
{
    switch (typeof data) {
        case "string":
             return data
        case "number":
        case "boolean":
        case "bigint":
        case "symbol":
        case "function":
            return data.toString()
        case "object":
            return JSON.stringify( data ).toString()
        default:
            return "undefined"
    }
    // if ( typeof data === 'function' ) return data.toString()
    // if ( typeof data === 'symbol' ) return data.toString()
    // if(typeof data === 'bigint') return data
    // if(data === undefined) return 'undefined'
    // return JSON.stringify( data ).toString()

}

console.log( dataToString<null>( null ) )
console.log( dataToString<bigint>( 10n ) )
console.log( dataToString<undefined>( undefined ) )
console.log( dataToString<symbol>( Symbol( 's' ) ) )
console.log(dataToString(function fn(){}))
console.log( dataToString<boolean>( true ) )
console.log( dataToString<string>( "string" ) )
console.log( dataToString<number>( 177 ) )
console.log( dataToString<object>( {a: 111} ) )
console.log( dataToString<object>( ['a', 2] ) )
console.log( dataToString<unknown>( {
    "userId": 5,
    "id": 43,
    "title": "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
    "body": "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
  }) )