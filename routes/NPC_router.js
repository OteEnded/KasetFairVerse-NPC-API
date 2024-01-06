var express = require('express');
var router = express.Router();
const apiMiddleware = require('../services/apimiddleware');

// GET /NPC/get_answer - Get all users
router.get('/get_answer', apiMiddleware.authenticate, async (req, res) => {
    try {
        answer = req.body.question;
        console.log(answer);
        res.json({
            is_success: true,
            message: "Answer",
            status: 200,
            content: {
                answer: answer
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            is_success: false,
            message: "Error fetching answer",
            status: 500,
            content: {
                error: error
            }
        })
    }
});

// GET /NPC/get_answer/<question> - Get all users
router.get('/get_answer/:question', apiMiddleware.authenticate, async (req, res) => {
    try {
        answer = req.params.question;
        console.log(answer);
        res.json({
            is_success: true,
            message: "Answer",
            status: 200,
            content: {
                answer: answer
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            is_success: false,
            message: "Error fetching answer",
            status: 500,
            content: {
                error: error
            }
        })
    }
});


module.exports = router;