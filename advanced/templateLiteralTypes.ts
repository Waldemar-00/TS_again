type TReadOrUpdate = "read" | "update"
type TBulk = "bulk" | ""
type TAccess = `can${ Capitalize<TReadOrUpdate> }${Capitalize<TBulk>}`

type TWithoutCan<T> = T extends `can${ infer S }` ? S : never

type TClearOfCan = TWithoutCan<TAccess>

type TErrorOrSuccess = "error" | "success"

type TResponse = {
    url: `https://${Uppercase<TErrorOrSuccess>}`
}

const urlErorr: TResponse = {
    url: "https://ERROR"
}