let express = require('express');
let router = express.Router();
let controller = require('../controllers/');


// router.get('/', function(req, res, next) {
//   res.status(200).json({ message: 'User Index Routes'});
// });

// user register
router.post("/", controller.userRegistration);

// user login
router.post("/login", controller.userLogin);

module.exports = router;
