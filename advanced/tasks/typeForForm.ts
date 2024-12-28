interface IForm
{
    name: string;
    password: string;
}

type TAnyForm<T> = {
    [P in keyof T]: T[P]
}
type TOurForm = TAnyForm<IForm>

const form: TOurForm = {
    name: 'ULADZIMIR',
    password: 'some string with numbers',
}


type TFormValidation<T> = {
    [ P in keyof T ]: { isValid: true } | { isValid: false, errorMessage: string }
}

type TValidation = TFormValidation<TOurForm>

const formValidation: TValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'The password must have more than 8 characters'}
}
