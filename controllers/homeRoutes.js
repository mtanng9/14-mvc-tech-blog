const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post } = require('../models');

router.get('/', async (req, res) => {
    //res.render('home', {layout: 'index'});
    try {
        const postData = await Post.findAll();
    
        // Serialize data so the template can read it
        const posts = postData.map((post) => post.get({ plain: true }));
    
        // Pass serialized data and session flag into template
        res.render('home', { 
          posts,
          logged_in: req.session.logged_in,
          layout: 'index'
        });
      } catch (err) {
        res.status(500).json(err);
      }
});

router.get('/dashboard', withAuth, async (req, res) => {
    res.render('dashboard', {layout: 'index'});
});

router.get('/post/:id', async (req, res) => {
    res.render('post', {layout: 'index'});
});

router.get('/login', (req, res) => {
    res.render('login', {layout: 'index'});
});

module.exports = router;