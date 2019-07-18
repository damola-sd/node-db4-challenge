const express = require('express');

const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h2>Recipe API</h2>')
})

server.listen(4000, () => {
    console.log('listening on 4000');
  });