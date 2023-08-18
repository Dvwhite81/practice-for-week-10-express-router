const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json('GET /colors');
});

router.get('/:name', (req, res) => {
    // I couldn't tell from directions
    // For "GET /colors/:name"
    // res.json('GET /colors/:name');
    res.json(`GET /colors/${req.params.name}`);
});

router.post('/:name/css-styles', (req, res) => {
    // Again, directions
    // res.json('POST /colors/:name/css-styles');
    res.json(`POST /colors/${req.params.name}/css-styles`);
});

router.delete('/:name/css-styles/:style', (req, res) => {
    // Again, directions
    // res.json('DELETE /colors/:name/css-styles/:style');
    res.json(`DELETE /colors/${req.params.name}/css-styles/${req.params.style}`);
});

module.exports = router;
