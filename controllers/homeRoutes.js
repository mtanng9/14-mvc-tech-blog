const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('home', {layout: 'index'});
});

router.get('/dashboard', async (req, res) => {
});

router.get('/post/:id', async (req, res) => {
});

router.get('/login', (req, res) => {
});

module.exports = router;