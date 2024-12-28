type TModifier = 'read' | 'update' | 'create' | 'delete'

interface IUserRoles
{
    customers?: TModifier
    readonly projects?: TModifier
    adminPanel?: TModifier
    //! adding some property below
    someNewProperty: boolean
}
//! the first way to create TUserAccess type

type TUserAccess_1 = {
    customers?: boolean
    projects?: boolean
    adminPanel?: boolean
}

//! The second way to create TUserAccess type

type ModifierToAccess<T> = {
    -readonly[P in keyof T as `canAccess${string & P}`]-?: boolean
}
type TUserAccess_2 = ModifierToAccess<IUserRoles> //! mappedTypes is a good way

//* Exclude
type ModifierToAccess_exclude<T> = {
   [P in keyof T as Exclude<`canAccess${string & P}`, 'canAccessprojects'>]: boolean
}

type TUserAccess_exclude = ModifierToAccess_exclude<IUserRoles>

//* Extract
type ModifierToAccess_extract<T> = {
   [P in keyof T as Extract<`canAccess${string & P}`, 'canAccessprojects'>]: boolean
}

type TUserAccess_extract = ModifierToAccess_extract<IUserRoles>

//* Change value type

type ModifierToAccess_value<T> = {
   [P in keyof T ]: string
}

type TUserAccess_value = ModifierToAccess_value<IUserRoles>