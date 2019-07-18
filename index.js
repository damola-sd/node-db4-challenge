const express = require('express');

const recipeRouter = require('./routes/recipe-route');
const server = express();

server.use(express.json());
server.use('/api/recipes', recipeRouter);


server.get('/', (req, res) => {
    res.send('<h2>Recipe API</h2>')
})

server.listen(4000, () => {
    console.log('listening on 4000');
  });