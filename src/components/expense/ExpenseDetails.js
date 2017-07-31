import React from 'react';
import PropTypes from 'prop-types';

const ExpenseDetails = ({expense}) => {
    return (
      <div className="media">
        <div className="media-body">
          <h4 className="media-heading">{expense.merchantName}</h4>
          <ul>
            <li><stron>Merchant Address: </stron> {expense.merchantAddress}</li>
          </ul>
        </div>
      </div>
    );
};

ExpenseDetails.propTypes = {
  expense: PropTypes.object
};

export default ExpenseDetails;
