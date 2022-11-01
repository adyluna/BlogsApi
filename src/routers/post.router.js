const express = require('express');
const postController = require('../controllers/postController');
const middlewares = require('../middlewares'); 

const router = express.Router();

router
  .post('/',
    middlewares.tokenMiddleware,
    middlewares.postMiddleware.validatePostCategory,
    middlewares.postMiddleware.validatePostBody,
    postController.createNewPost);

router.get('/', middlewares.tokenMiddleware, postController.findAllPosts);
module.exports = router;