const express = require('express');
const userController = require('../controllers/userController');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/', middlewares.userMiddleware.validateBody, userController.createUser);

router.get('/', middlewares.tokenMiddleware, userController.getAllUsers);

router.get('/:id', middlewares.tokenMiddleware, userController.getUserById);

module.exports = router;