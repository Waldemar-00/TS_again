//! Partial
//! Required
//! Readonly

interface TUserTest
{
    name: string;
    age?: number;
    sex?: string;
    email: string;
}

type partial = Partial<TUserTest>

type required = Required<TUserTest>

type readonly = Readonly<TUserTest>

type readonlyAndRequired = Required<Readonly<TUserTest>>


//! Omit
//! Pick
//! Exstract
//! Exclude
const sym = Symbol('sym')
interface IPaymentPersistent
{
    id: number
    sum: number
    from: string
    to: string
    arr: string[]
}

type TPayment = Omit<IPaymentPersistent, 'id'>
type TRequisits = Pick<IPaymentPersistent, 'from' | 'to'>

type TExstractTest = Extract<'string' | 'otherString' | 10, string>
type TExstractTest2 = Extract<'string' | 'otherString' | 10, number>

type TExclude = Exclude<'string' | 'otherString' | 10, string>
type TExclude2 = Exclude<'string' | 'otherString' | 10, number>


//! ReturnType
//! Parameters
//! ConstructorParameters
//! InstanceType

class UserServices
{
    constructor ( public id: number, public name: string )
    {
        this.id = id
        this.name = name
    }
}

function createData ( id: number, name: string )
{
    return new UserServices( id, name )
}

type returnedType = ReturnType<typeof createData>

type RT = ReturnType<() => void>
type RT_2 = ReturnType<<T>() => T> //! unknown
type RT_3 = ReturnType<<T extends new (...arg: any[]) => {}>() => T>


type TParametersType = Parameters<typeof createData> //! we got a Tuple
type FP = TParametersType[ 0 ]
type SP = TParametersType[ 1 ]

type TParameterType_1 = Parameters<typeof createData>[ 0 ]
type TParameterType_2 = Parameters<typeof createData>[ 1 ]


type TConstructorParameters_1 = ConstructorParameters<typeof UserServices>[ 0 ]
type TConstructorParameters_2 = ConstructorParameters<typeof UserServices>[ 1 ]


type TInstanceType = InstanceType<typeof UserServices>


//! Awaited


type TAwaited = Awaited<Promise<Promise<string>>> //! will untie all chain

interface IMenu
{
    name: string
    url: string
}

async function getMenuFromServer (): Promise<IMenu[]> //! Awaited to get - IMenu[] from Promise<IMenu[]>
{
    return [ { name: 'Analitics', url: 'https://analitics.com' } ]
}

type AsyncReturnedType = Awaited<ReturnType<typeof getMenuFromServer>>

async function getArray<T> (fn: T): Promise<Awaited<T[]>>
{
    return [await fn]
}