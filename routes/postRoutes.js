const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// GET homepage with all posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.render('home', { posts });
  } catch (err) {
    res.status(500).send('Error retrieving posts.');
  }
});

// POST a new post
router.post('/posts', async (req, res) => {
  try {
    const screenName = req.body.screenName?.trim();
    const content = req.body.content;
    const totalPosts = await Post.countDocuments();

    const post = new Post({
      screenName: screenName || `User #${totalPosts + 1}`,
      content
    });

    await post.save();
    res.redirect('/');
  } catch (err) {
    res.status(500).send('Error saving post.');
  }
});

module.exports = router;
