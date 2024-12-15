function generateError (): never
{
    throw new Error('Error')
}

function infinityLoop (): never
{
    while ( true ) { }
}

function recursion (): never
{
   return recursion()
}


type paymentAction = 'refund' | 'checkout'
function refund () { }
function checkout () { }
function proccesAction ( action: paymentAction ): void
{
    switch (action) {
        case 'refund':
            refund()
            break //! if end point(break) - returned type can't be never!!! It's void
        case 'checkout':
            checkout()
            break
        default:
            const _checking: never = action
            throw new Error()
    }
}

function isString ( arg: string | number ): boolean
{
    if ( typeof arg === 'string' ) return true
    else if ( typeof arg === 'number' ) return false
    else throw new Error('Wrong data: not a number and not a string')
}