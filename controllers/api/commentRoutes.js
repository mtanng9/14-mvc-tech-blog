const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');


router.post('/', withAuth, async (req, res) => {
});

module.exports = router;