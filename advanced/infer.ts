function libraryFn ( message: string, transaction: {
    fromTo: [string, string]
})
{
    console.log( message, transaction)

}
type GetFirstArgument<T> = T extends ( first: infer First, ...args: any[] ) => any ? First : never
type GetSecondArgument<T> = T extends ( first: string, second: infer Second, ...args: any[] ) => any ? Second : never

const transaction: GetSecondArgument<typeof libraryFn> = {
    fromTo: ['one', 'two'] //! first: as [string, string]
}

libraryFn('Hello Infer', transaction)