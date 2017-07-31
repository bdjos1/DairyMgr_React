import * as actionTypes from './actionTypes';

//const apiUrl = 'http://57c64baac1fc8711008f2a82.mockapi.io/book';

let expenses = [
  {id: "1", merchantName: "Brownes Hardware", merchantAddress: "4 Thomas square, Kilmainham, Dublin 8, Ireland"},
  {id: "2", merchantName: "Kerry Group Tralee", merchantAddress: "129 Main Street, Tralee, Co Kerry, Ireland"}
];

export const fetchExpensesSuccess = (expenses) => {
  return {
    type: actionTypes.FETCH_EXPENSES_SUCCESS,
    expenses
  };
};

export const createExpenseSuccess = (expense) => {
  let id = Math.floor((Math.random() * 100) +1);
  // TODO: Validate that this id does not already exist!!
  expense.id = id;
  return {
    type: actionTypes.CREATE_EXPENSE_SUCCESS,
    expense
  };
};

export const fetchExpenseByIdSuccess = (bookId) => {
  return {
    type: actionTypes.FETCH_EXPENSE_BY_ID_SUCCESS,
    bookId
  };
};

export const deleteExpenseByIdSuccess = (bookId) => {
  return {
    type: actionTypes.DELETE_EXPENSE_SUCCESS,
    bookId
  };
};

export const fetchExpenses = () => {
  return (dispatch) => {

    dispatch(fetchExpensesSuccess(expenses));
    /*return Axios.get(apiUrl)
      .then(response => {
        //dispatch(fetchExpensesSuccess(response.data))
        dispatch(fetchExpensesSuccess(books));

      })
      .catch(error => {
        throw(error);
      });*/
      //dispatch(fetchExpensesSuccess(books));
  };
};

export const createExpense = (expense) => {

  return (dispatch) => {
    /*return Axios.post(apiUrl, expense)
      .then(response => {
        //dispatch(createExpenseSuccess(response.data))
        dispatch(createExpenseSuccess(expense))
      })
      .catch(error => {
        throw(error);
      });*/

    dispatch(createExpenseSuccess(expense));
  };

};

export const fetchExpenseById = (bookId) => {
  return (dispatch) => {
    /*return Axios.get(apiUrl + '/' +bookId)
      .then(response => {
        //dispatch(fetchExpenseByIdSuccess(response.data));
        dispatch(fetchExpenseByIdSuccess(response.data));
      })
      .catch(error => {
        throw(error);
      });*/

    dispatch(fetchExpenseByIdSuccess(bookId));

  };
};

export const deleteExpenseById = (bookId) => {
  return (dispatch) => {

    dispatch(deleteExpenseByIdSuccess(bookId));

  };
};
