let busController = require('./bus.controller.js');
let userController = require('./user.controller.js');


module.exports = {
    ...busController,
    ...userController
}