const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/comments/:productID', async (req, res) => {
    console.log(req.params.productID)
    try {
        const { data } = await axios.get(`${process.env.COMMENT_SERVICE}/comments/${req.params.productID}`);
        const filteredComments = data.filter(comment => 
            comment.message && typeof comment.message === 'string' && comment.message.toLowerCase().includes('orange')
        );
    
        res.json(filteredComments);
      } catch (error) {
       // console.error(error);
        res.status(500).json({ message: 'An error occurred while fetching comments', error: error });
      }
  });
  


module.exports = router;