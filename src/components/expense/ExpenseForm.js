import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import * as bookActions from '../../actions/expenseActions';
import { browserHistory } from 'react-router';

class ExpenseForm extends React.Component{


  submitBook(event){
    event.preventDefault();
    let merchantNameInput = this.refs.merchantName.value;
    let merchantAddressInput = this.refs.merchantAddress.value;
    //let id = Math.floor((Math.random() * 100) +1);
    let input = {
      merchantName: merchantNameInput,
      merchantAddress: merchantAddressInput,
    };
    this.props.createExpense(input);
    this.refs.merchantName.value = '';
    this.refs.merchantAddress.value = '';
    browserHistory.push('/expenses');
  }

  render(){
    return (
      <form onSubmit={this.submitBook.bind(this)}
            className="form-horizontal"
      >
        <div className="input-group">
          <label className="col-sm-2 control-label">Merchant Name: </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="merchantName"
              ref="merchantName"
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <label className="col-sm-2 control-label">Merchant Address: </label>
          <div className="col-sm-10">
            <input
              type="text"
              name="merchantAddress"
              ref="merchantAddress"
              className="form-control" />
          </div>
        </div>
        <br/>
        <div className="input-group">
          <div className="col-sm-offset-2 col-sm-10">
            <input type="submit" className="btn btn-default"/>
          </div>
        </div>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createExpense: expense => dispatch(bookActions.createExpense(expense))
  };
};

ExpenseForm.propTypes = {
  createExpense : PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseForm);
