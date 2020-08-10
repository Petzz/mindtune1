const express = require("express");
const router = express.Router();
const { check, validationResult } = require('express-validator/check');
var cors = require('cors');


router.post('/', cors(),
    [
        check('name', "please enter your name")
            .not()
            .isEmpty(),
        check('email', "please enter valid email")
            .isEmail(),
        check('password', "please enter valid password")
            .isLength({ min: 6 })
    ],
    (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //see if user exists

        res.send('user route');
    }
);
module.exports = router;