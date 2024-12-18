class CUserWithGetterSetter
{
    _login: string;
    _password!: string;
    loginAt: Date

    constructor ( login: string, password: string )
    {
        this._login = `User-${login}`
        this.setPassword(password)
        this.loginAt = new Date()
    }

    get login (): string
    {
        return this._login;
    }
    set login ( myLogin: string )
    {
        this._login = `User-${ myLogin }`;
        this.loginAt = new Date()
    }
    get password (): string
    {
        return `Anyone cannot get a password!`
    }
    set password ( pass: string )
    {
        this.setPassword( pass )

    }
    async setPassword ( pass: string ): Promise<void>
    {
        //* secure the password and then
        setTimeout( () =>
        {
            this._password = pass;
            console.log( 'secure' )
        }, 2000 )
    }
}

const userSetGet = new CUserWithGetterSetter( 'U77', '1870313-1319891i' ) //* Here was called constructor and setPassword in it
console.log( userSetGet )
userSetGet.password = 'hfajfkasjl-26352197270218-yrgyirq' //* Here we call setter password, which calls setPassword in it
setTimeout( () => console.log( userSetGet ), 3500 )

console.log( userSetGet.password )