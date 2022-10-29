const express = require('express');
const userController = require('../controllers/userController');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/', middlewares.userMiddleware.body, userController.createUser);

module.exports = router;