interface Something
{
    id: string | number,
    data: object,
    owner: string,
    description?: string,
}
const something: Something = {
    id: 111,
    data: {},
    owner: 'ULADZIMIR',
}

function multiply ( a?: number, b: number = 5 ): number
{
    if ( !a ) return b * b
    else return a * b
}