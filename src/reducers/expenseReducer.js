export const expenseReducer = (state = [], action) => {
  if (action.type === 'FETCH_EXPENSE_BY_ID_SUCCESS') {
    let fetchedExpense = null;
    for (let i = 0; i < window.expenses.length; i++) {
      if (window.expenses[i].id == action.bookId) {
        fetchedExpense = window.expenses[i];
        break;
      }
    }
    return fetchedExpense;
  } else {
    return state;
  }
};
