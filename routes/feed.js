const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// 'feed/posts' handled by the GET method
router.get('/posts', feedController.getPosts);

module.exports = router;