const {createExpense} = require("../services/expenseService");

const createNewExpense = async (req, res) => {
  const { description, amount, category } = req.body;
  const userId = req.user.id;

  try {
    const expense = await createExpense({
      userId,
      description,
      amount,
      category,
    });
    res.status(201).json({ message: "Expense created", expense });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createNewExpense };
