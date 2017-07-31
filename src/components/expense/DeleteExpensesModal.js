import React from 'react';
import {connect} from 'react-redux';
import * as bookActions from '../../actions/expenseActions';
import { browserHistory } from 'react-router';
import Modal from './Modal';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

class DeleteExpensesModal extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount(){
    let modal = document.getElementById('myModal');
    modal.style.display = "block";
  }


   deleteExpense(id) {
     let submittedId = this.props.params.id;
     if (!submittedId) {
       submittedId = id;
     }
     this.props.deleteExpenseById(submittedId);
     browserHistory.push('/expenses');
   }

   cancel() {
     browserHistory.push('/expenses');
   }


  render() {
    let id = this.props.params.id;
    if (!id) {
      id = this.props.id;
    }
  return (
    <div id="myModal" className="modal">
      <Modal titleTxt={<FormattedMessage id="deleteMerchant.title" />} bodyTxt={<FormattedMessage id="deleteMerchant.body"/>} submitAction={this.deleteExpense.bind(this, id)} cancelAction={this.cancel.bind(this)}/>
    </div>
  );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteExpenseById: bookId => dispatch(bookActions.deleteExpenseById(bookId))
  };
};

DeleteExpensesModal.propTypes = {
  params: PropTypes.object,
  deleteExpenseById: PropTypes.func,
  id : PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteExpensesModal);
