"use strict";
class Controller {
    handleWithLogs(request) {
        console.log('START');
        this.handle(request);
        console.log('END');
    }
}
class UserController extends Controller //! required implementation of Controller
 {
    handle(request) {
        console.log(request);
    }
}
const userController = new UserController();
userController.handle('Request');
userController.handleWithLogs('Request');
