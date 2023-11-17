let express = require('express');
let router = express.Router();
let controller = require('../controllers/');

router.get('/', controller.getAllBus);
router.get('/:id', controller.getBusByID);
router.post('/', controller.createNewBus);
router.put('/:id', controller.updateBusByID);



module.exports = router;
