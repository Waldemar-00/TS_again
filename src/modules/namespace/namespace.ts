export namespace A
{
    export interface A
    {
        a: number
    }
    export const o: A = { a: 7 }
}

console.log(A.o.a)