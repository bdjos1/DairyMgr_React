import React  from 'react';
import {Route, IndexRoute} from 'react-router';
import Home from './components/common/HomePage';
import ExpensePage from './components/expense/ExpensePage';
import ExpenseForm from './components/expense/ExpenseForm';
import ExpenseDetailsPage from './components/expense/ExpenseDetailsPage';
import DeleteExpensesModal from './components/expense/DeleteExpensesModal';
import App from './components/App';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path="/expenses" component={ExpensePage}/>
    <Route path="/newExpense" component={ExpenseForm}/>
    <Route path="/expenses/:id" component={ExpenseDetailsPage}/>
    <Route path="/deleteExpense/:id/:confirmDeletion" component={DeleteExpensesModal}/>
  </Route>
);
