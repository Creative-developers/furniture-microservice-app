const express = require('express');
const Comment = require('../models/comment.model');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const comment = new Comment(req.body);
    await comment.save();
    res.status(201).send(comment);
  }catch(err) {
    res.status(500).send(err);
  }
});



// Get all comments for a specific product
router.get('/:productId', async (req, res) => {
  console.log('testing...')
  try{
    const comments = await Comment.find({ productId: req.params.productId });
    res.send(comments);
  }catch(err){
    res.status(500).send(err);
  }
});

module.exports = router;

module.exports = router;