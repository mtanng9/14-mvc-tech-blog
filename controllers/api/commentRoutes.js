const router = require('express').Router();
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
});

module.exports = router;