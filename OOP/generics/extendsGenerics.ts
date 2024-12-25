
class VihicleRun
{
    constructor ( public run: number, public miles: number = 0 )
    {
        this.run = run
        this.miles = miles
    }
}
function kmToMiles<T extends VihicleRun> ( vihicle: T ): T
{
    vihicle.miles = Math.round(vihicle.run / 0.6)
    return  vihicle
}

const vihicleRun: VihicleRun = new VihicleRun( 100 )

console.log(kmToMiles(vihicleRun))