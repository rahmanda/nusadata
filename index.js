const path = require('path');
const express = require('express');
const server = express();

const port = 3000;
const assetPath = '/ast';
const publicPath = path.join(__dirname, 'public');

server.use(assetPath, express.static(publicPath));

server.listen(port, () => console.log(`Server is running on port ${port}!`);
