const express = require('express');

const colorsRouter = express.Router();

colorsRouter.get('/', (req, res) => {
    res.json('GET /colors');
});

colorsRouter.get('/:name', (req, res) => {
    // I couldn't tell from directions
    // For "GET /colors/:name"
    // res.json('GET /colors/:name');
    res.json(`GET /colors/${req.params.name}`);
});

module.exports = colorsRouter;
