interface Keyof
{
    name: string
    age: number
}

type keyFromInterface = keyof Keyof

const keyAge: keyFromInterface = "age"
const keyName: keyFromInterface = "name"

const object: Keyof = {
    name: 'John',
    age: 100
}
type typesFromObject = keyof typeof object

const nameFromObject: typesFromObject = "name"
const ageFromObject: typesFromObject = "age"


function getProperty<T, K extends keyof T > ( object: T, key: K ): T[K]
{
    return object[key]
}

console.log(getProperty(object, "name"))
