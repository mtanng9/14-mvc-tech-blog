const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home', {layout: 'index'});
});

router.get('/dashboard', async (req, res) => {
    res.render('dashboard', {layout: 'index'});
});

router.get('/post/:id', async (req, res) => {
    res.render('post', {layout: 'index'});
});

router.get('/login', (req, res) => {
    res.render('login', {layout: 'index'});
});

module.exports = router;