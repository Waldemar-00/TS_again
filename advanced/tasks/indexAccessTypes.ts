interface IRole
{
    name: string
}

interface IIndexAccessTypes
{
    index: number
    access: boolean
    types: string
    roles: IRole[]
}

type index = IIndexAccessTypes[ 'index' ]
type access = IIndexAccessTypes[ 'access' ]
type types = IIndexAccessTypes[ 'types' ]

type TRole = IIndexAccessTypes[ 'roles' ][ number ] //! IRole

const roles = [ 'user', 'admin', 'super-user' ] as const
type TAdminUnionType = typeof roles[ number ] //! 'user' | 'admin' | 'super-user'

interface IUserPermissions
{
    user: string,
    age: number,
    permissions: {
        manager: boolean
    }
}
const userObject: IUserPermissions = {
    user: 'John',
    age: 24,
    permissions: {
        manager: true
    }
} as const

type TUserObject = typeof userObject //! { readonly user: "John"; readonly age: 24; }

type TPermissions = typeof userObject.permissions.manager
type TPermissionsFromType = IUserPermissions[ 'permissions' ][ 'manager' ]

let someNumber = 119900 as const