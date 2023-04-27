const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post } = require('../../models');


router.post('/', withAuth, async (req, res) => {
});

router.put('/:id', withAuth, async (req, res) => {
});

router.delete('/:id', withAuth, async (req, res) => {
});

module.exports = router;