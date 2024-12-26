interface IGroupData
{
    group: number;
    name: string;
}
const groupData: IGroupData[] = [
	{ group: 1, name: 'a' },
	{ group: 1, name: 'b' },
    { group: 2, name: 'c' },
    { group: 2, name: 'd' },
    { group: 2, name: 'e' },
    { group: 3, name: 'f' },
];
interface IReturnedObject<T>
{
    [key: string]: T[]
}
function regrouping<T extends {}, K extends keyof T> (array: T[], key: K ): IReturnedObject<T>
{
    const returnedObject: IReturnedObject<T> = {}

    array.forEach( ( obj: T ) =>
    {
        const localKey: string = obj[ key ] as string
        if ( localKey in returnedObject )
        {
          returnedObject[ localKey ].push( obj )
        } else
        {
            returnedObject[ localKey ] = []
            returnedObject[ localKey ].push( obj )
        }
    })
    return returnedObject
}

console.log(regrouping(groupData, "group"))