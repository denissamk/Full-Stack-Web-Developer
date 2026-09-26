// UTILIZE ORIGINAL FOR LOOPS BUILT IN FEATURES: BREAK & CONTINUE

// WANT TO KNOW:
// - 2023
// - ONLY TOTAL SPENT/EXPENSES (THE POSITIVE AMOUNT, BECASUSE THE NEGATIVE AMOUNT IS A REFUND) 

const expensesAndRefunds = [
  { description: 'Groceries', amount: 50, year: 2023 },
  { description: 'Electronics', amount: -30, year: 2023 },
  { description: 'Dinner', amount: 40, year: 2023 },
  { description: 'Clothing', amount: 60, year: 2023 },
  { description: 'Entertainment', amount: 25, year: 2023 },
  { description: 'Rent', amount: -500, year: 2024 },
  { description: 'Utilities', amount: 100, year: 2024 },
  { description: 'Books', amount: 20, year: 2024 },
  { description: 'Fitness', amount: 30, year: 2024 },
  { description: 'Gifts', amount: 15, year: 2024 },
];

let totalSpent = 0;
const cutoffDate = 2024;

for (let i = 0; i < expensesAndRefunds.length; i++) {

    const currentExpenseOrRefund = expensesAndRefunds[i];

    if (currentExpenseOrRefund.year >= cutoffDate) {
        break
    }

    if (currentExpenseOrRefund.amount < 0) {
        continue
    }

    totalSpent += currentExpenseOrRefund.amount;
}

console.log(totalSpent);