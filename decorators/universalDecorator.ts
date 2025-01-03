function DUniversal (name: string): any
{
    console.log( "Initialization " + name )
    return function ()
    {
        console.log("Calling: " + name)
    }
}

@DUniversal('CLASS')
class MyClass
{
    @DUniversal('PROPERTY')
    property: any

    @DUniversal('STATIC_property')
    static staticProperty: any
    @DUniversal('METHOD')
    method ( @DUniversal( "PARAMETER" ) _: any ): any{ }

    @DUniversal('STATIC_method')
    static staticMethod ( @DUniversal( "STATIC_parameter" ) _: any ): any{ }

    constructor(@DUniversal( "CONSTRUCTOR_parameter" ) _: any ) {}
}
// Initialization PROPERTY
// Calling: PROPERTY
// Initialization METHOD
// Initialization PARAMETER
// Calling: PARAMETER
// Calling: METHOD
// Initialization STATIC_property
// Calling: STATIC_property
// Initialization STATIC_method
// Initialization STATIC_parameter
// Calling: STATIC_parameter
// Calling: STATIC_method
// Initialization CLASS
// Initialization CONSTRUCTOR_parameter
// Calling: CONSTRUCTOR_parameter
// Calling: CLASS