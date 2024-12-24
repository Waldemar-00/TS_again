async function resolvePromise<T> (arg: T): Promise<T>
{
    const r = await new Promise<T>( (resolve, reject) => resolve(arg))
    return r
}

resolvePromise<number>( 177 ).then( arg => console.log( arg ) )
resolvePromise<string>( 'string' ).then( arg => console.log( arg ) )
resolvePromise<boolean>( true ).then( arg => console.log( arg ) )
const record: Record<string, boolean> = {
    some: true,
    other: false,
    abc: true
}

function getHalfOfArray<T> ( array: Array<T> ): T[]
{
    array.length = array.length / 2
    return array
}

console.log(getHalfOfArray(['a', 'b', 'c', 'd']))