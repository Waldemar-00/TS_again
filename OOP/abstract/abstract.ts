abstract class Controller
{
    abstract handle ( request: unknown ): void
    handleWithLogs ( request: unknown ): void
    {
        console.log( 'START' )
        this.handle( request )
        console.log( 'END' )
    }

}

class UserController extends Controller //! required implementation of Controller
{
    handle ( request: unknown ): void
    {
       console.log( request)
    }

}
const userController = new UserController()
userController.handle( 'Request' )
userController.handleWithLogs( 'Request' )