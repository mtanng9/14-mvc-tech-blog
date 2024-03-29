const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Comment } = require('../../models');


router.post('/', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.create(req.body);
        res.status(200).json(commentData);
      } catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router;