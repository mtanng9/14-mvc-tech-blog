const router = require('express').Router();
const withAuth = require('../utils/auth');
const { Post } = require('../models');

router.get('/', async (req, res) => {
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
  try {
    const postData = await Post.findAll({ where: {user_id: req.session.user_id} });

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

router.get('/post/:id', async (req, res) => {
    res.render('post', {
        logged_in: req.session.logged_in,
        layout: 'index'
    });
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/dashboard');
        return;
      }
    
      res.render('login', {
        logged_in: req.session.logged_in,
        layout: 'index'
    });
});

module.exports = router;