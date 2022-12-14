const express = require('express');
const categoryController = require('../controllers/categoryController');
const middlewares = require('../middlewares');

const router = express.Router();

router.post('/', middlewares.tokenMiddleware, categoryController.addCategory);

router.get('/', middlewares.tokenMiddleware, categoryController.getAllCategories);

module.exports = router;