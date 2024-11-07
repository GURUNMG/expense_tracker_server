const express = require('express');
const {createNewExpense} = require('../controllers/expenseController');
const {authMiddleware} = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/save-expense', authMiddleware, createNewExpense);

module.exports = router;
