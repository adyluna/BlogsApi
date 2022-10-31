const express = require('express');
const postController = require('../controllers/postController');
const middlewares = require('../middlewares'); 

const router = express.Router();

router.post('/', middlewares.tokenMiddleware, postController.createNewPost);

module.exports = router;