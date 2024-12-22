class UserBuilder
{
    name!: string
    setName (name: string): this //! not use UserBuilder, see below
    {
        this.name = name
        return this
    }
    isAdminBuilder(): this is AdminBuilder { return this instanceof AdminBuilder }
}

const userBuilder = new UserBuilder()
userBuilder.setName( 'ULADZIMIR' )
class AdminBuilder extends UserBuilder
{
    roles!: string[]
}
const adminBuilder = new AdminBuilder().setName( 'Waldemer' ) //! const adminBuilder: AdminBuilder if setName returns this, else -- UserBuilder, see above

let user_u: UserBuilder | AdminBuilder = new UserBuilder().setName('Sally')
if ( user_u.isAdminBuilder() ) console.log( user_u.roles )
else console.log( user_u.name )