const express = require('express');
const multer =  require('multer');
const fs = require('fs');
const Product = require('../models/product.model');

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = './uploads';
    if (!fs.existsSync(dir)) {
      try {
        fs.mkdirSync(dir);
      } catch (err) {
        console.error(`Failed to create directory ${dir}: ${err}`);
        return cb(err);
      }
    }
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + '-' + file.originalname);
  }
});


const upload = multer({ storage: storage });

router.post('/', upload.single('image'), async (req, res) => {
  console.log({ body: req.body, file: req.file });

  try {
    if (!req.body.name || !req.body.price) {
      return res.status(400).send({ error: 'Please provide name and price' });
    }

    const product = new Product({
      name: req.body.name,
      price: req.body.price,
      image: req.file.path 
    });

    await product.save();

    res.status(201).send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).send({ error: 'Product not found' });
    }
    res.send(product);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get('/', async (req, res) => {
 try{
    const products = await Product.find();
    res.send(products);
 }catch(err){
   res.status(500).send(err);
 }
});

module.exports = router;