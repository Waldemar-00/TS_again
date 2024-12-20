class Vehicle
{
     #private: string
    constructor
    (
        public type: string,
        private demages: string[],
        protected run: number,
        _priv: string
    )
    {
        this.type = type
        this.run = run
        this.demages = demages
        this.#private = _priv
    }
    addDemag (d: string)
    {
        this.demages.push(d)
    }
    get demag (): string[]
    {
        return this.demages
    }
    set demag ( ds: string[] )
    {
        this.demages = ds
    }
    log () { console.log( this.run ) }
    getPrivate () { return this.#private }
    //! You can do that, see below
    isPrivateEqual ( v: Vehicle ) { return this.#private === v.#private }
    //!
}

const vihicle = new Vehicle( 'bus', [ 'wheel', 'engine' ], 121000, 'secure' )
console.log( vihicle.getPrivate() )
vihicle.log()

class Vihicles extends Vehicle
{
    vihicles: string[]
    constructor (vihicles: string[], type: string, demages: string[], run: number, _priv: string)
    {
        super(type, demages, run, _priv)
        this.vihicles = vihicles
    }
    logRun () { return this.run }
    //! logDemages() { return this.demages} - Property 'demages' is private and only accessible within class
}
const vihicles = new Vihicles( [ 'bus', 'car', 'ship' ], 'bus', [ 'wheel', 'engine' ], 122000, 'SECURITY' )
console.log(vihicles.getPrivate())
//! vihicles.run  - Property 'run' is protected and only accessible within class 'Vihicle' and its subclasses
//! vihicles.demages - Property 'demages' is private and only accessible within class 'Vihicle'