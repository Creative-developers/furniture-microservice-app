require('dotenv').config()
const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const productRoutes = require('./routes/product.route');

const app = express();
app.use(express.json());
app.use(cors())

app.use('/uploads', express.static('uploads'));

// Connect to MongoDB
connectDB();

app.use('/products', productRoutes);

app.get('/', (req, res) => res.send('post service is runnning...'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));