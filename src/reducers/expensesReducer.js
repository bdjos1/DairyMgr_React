import * as ExpensesBlah from '../components/ExpensesState';

export const expensesReducer = (state = [], action) => {
  // TODO: Bad use of global window object here.. Must manage state in better way!
  window.expenses = state;
  switch (action.type) {
    case 'CREATE_EXPENSE_SUCCESS':
        return [
          ...state,
          Object.assign({}, action.expense)
        ];
    case 'FETCH_EXPENSES_SUCCESS':
          return action.expenses;
    case 'DELETE_EXPENSE_SUCCESS':
      // TODO: Bad use of global window object here.. Must manage state in better way!
      for (let i = 0; i < window.expenses.length; i++) {
        if (window.expenses[i].id == action.bookId) {
          window.expenses.splice(i, 1);
          break;
        }
      }
      return window.expenses;
    default:
         //TODO: Fix this up!
          ExpensesBlah.setExpenses(state);
          return state;
  }
};



