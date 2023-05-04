require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const commentRoutes = require('./routes/comment.route');

const app = express();
app.use(express.json());
app.use(cors())

// Connect to MongoDB
connectDB();

app.use('/comments', commentRoutes);

app.get('/', (req, res) => res.send('comment service is running...'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));