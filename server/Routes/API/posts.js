const express = require('express');
const router = express.Router();

router.get('/test',  (reg, res) => res.json({msg: "Posts works!"}));

module.exports = router;