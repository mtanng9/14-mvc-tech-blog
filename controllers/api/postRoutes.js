const router = require('express').Router();
const withAuth = require('../../utils/auth');
const { Post } = require('../../models');


router.post('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.create(req.body);
        res.status(200).json(postData);
      } catch (err) {
        res.status(400).json(err);
      }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.update(req.body, { where: {id: req.params.id} });
        res.status(200).json(postData);
      } catch (err) {
        res.status(400).json(err);
      }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({ where: {id: req.params.id} });
        res.status(200).json(postData);
      } catch (err) {
        res.status(400).json(err);
      }
});

module.exports = router;