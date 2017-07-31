// Set up your root reducer here...
import { combineReducers } from 'redux';
import {expensesReducer} from './expensesReducer';
import {expenseReducer} from './expenseReducer';
import {i18nReducer} from './i18nReducer';

export default combineReducers({
  expenses: expensesReducer,
  expense: expenseReducer,
  i18n: i18nReducer
});
