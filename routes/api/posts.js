const express = require("express");

const router = express.Router();


router.get('/', (req, res) => res.send('pOsts route'));
module.exports = router;