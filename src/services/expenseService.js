const Expense = require("../models/Expense");

const createExpense = async ({ userId, description, amount, category }) => {
  const expense = new Expense({ userId, description, amount, category });
  return await expense.save();
};

module.exports = { createExpense };
