class Accessor
{
    private _users!: number
    @accessorDecorator()
    get users (): number
    {
        return this._users
    }

    set users ( value: number )
    {
        this._users = value
    }
}
const accessor = new Accessor()
function accessorDecorator ()
{
    return (
        target: Object,
        _key: string | symbol,
        descriptor: PropertyDescriptor
    ) =>
    {
        const get = descriptor.get
        const set = descriptor.set
        descriptor.get = () =>
        {
            console.log( 'New getter____' )
            return get?.apply(target)
        }
        descriptor.set = (...args: any) =>
        {
            console.log( 'New setter____' )
            set?.apply(target, args)
        }
    }
}



accessor.users = 7
console.log( accessor.users )
