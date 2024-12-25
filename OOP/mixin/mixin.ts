//! CONSTRUCTOR type of the Classes - see below

type Constructor = new ( ...arg: any[] ) => {}

//! Constraint of the constructor for the class

type GConstructor<T = {}> = new ( ...arg: any[] ) => T

class List
{
    constructor(public items: string[]){}
}
type ListType = GConstructor<List>

function MixinExtendedList<T extends ListType>(BaseClass: T)
{
    return class ExtendedList extends BaseClass
    {
        getList() { return this.items }
    }
}

class BaseClass
{
    items!: string[]
    setList(arg: string[]) {this.items = arg}
}
const MixinClass = MixinExtendedList( BaseClass )
const someInstanceFromMixinClass = new MixinClass()
someInstanceFromMixinClass.setList(['first', 'second', 'MIXIN'])
console.log( someInstanceFromMixinClass.getList() )