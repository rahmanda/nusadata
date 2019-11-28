const path = require('path');
const express = require('express');
const server = express();

const port = 3000;
const publicPath = path.join(__dirname, 'public');

server.use(express.static(publicPath));

server.listen(port, () => console.log(`Server is running on port ${port}!`));
