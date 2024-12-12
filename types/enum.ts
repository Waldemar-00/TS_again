enum Statuses {
    'PENDING' = 'PENDING',
    'SUCCESS' = 'SUCCESS',
    'FAILED' = 'FAILED',
}
const enum Test
{
    'SOME' = 'SOME'
}
function logStatus ( status: Statuses ): void
{
    console.log(status)
}
logStatus( Statuses.PENDING )
logStatus( Statuses.SUCCESS )
logStatus( Statuses.FAILED )

function enumLikeObject (arg: typeof Statuses )
{
    console.log( arg )
    console.log( arg.PENDING )
    console.log( arg.SUCCESS )
    console.log( arg.FAILED )

}
enumLikeObject( Statuses )
const ourTest = Test.SOME