class UserService
{
    private static db: unknown = [ 'static', 'private' ]
    constructor ( db: unknown )
    {
        UserService.db = db
    }
    static {
        UserService.db = 'static block'
    }
    static getDB ()
    {
        return UserService.db
    }
}
const u_s = new UserService( [ 'example' ] )
console.log( u_s )
console.log(UserService.getDB())