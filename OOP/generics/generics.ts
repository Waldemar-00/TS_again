interface LogLine <T>
{
    timeStamp: Date,
    data: T
}

const logLine: LogLine<Record<string, number>> = {
    timeStamp: new Date(),
    data: {
        a: 10
    }
}
const logLineLiteral: LogLine<{a: 10}> = {
    timeStamp: new Date(),
    data: {
        a: 10
    }
}

type TFn = <T>( arg: Array<T> ) => T

const someFunction: TFn = function <T> ( arg: T[] ): T
{
    return arg[0]
}
const someArrayFunction: TFn = <T> ( arg: T[] ): T => {
    return arg[0]
}
