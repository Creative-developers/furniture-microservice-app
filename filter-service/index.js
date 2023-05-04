require('dotenv').config()
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use(cors())



app.use('/filter', routes);

app.get('/', (req, res) => res.send('filter service is running...'));

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));