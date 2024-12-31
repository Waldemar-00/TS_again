interface IShip
{
    name: string
    volume: number
}
interface IShipWithcreatedAt extends IShip
{
    createdAt: string
}

@FDСreatedAt()
class Ship implements IShip
{
    constructor( public name: string, public volume: number ) {}
}

function FDСreatedAt ()
{
    return <T extends { new( ...args: any[] ): {} }> (constructor: T) => {
        return class extends constructor
        {
            createdAt = new Date().toTimeString()
        }
    }
}

const ship001 = new Ship( 'Ice Volat', 200_000 )

if ( (ship001 as IShipWithcreatedAt).createdAt )
{
    console.log((ship001 as IShipWithcreatedAt).createdAt)
}
if ( (ship001 as any).createdAt )
{
    console.log((ship001 as any).createdAt)
}
console.log( ( ship001 as IShipWithcreatedAt ).createdAt )
console.log( ( ship001 as any ).createdAt )

console.log( ( ship001 as IShip & {createdAt: string} ).createdAt )