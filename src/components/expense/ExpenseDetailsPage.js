import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import ExpenseDetails from './ExpenseDetails';
import * as bookActions from '../../actions/expenseActions';


class ExpenseDetailsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount(){
      this.props.fetchExpenseById(this.props.params.id);
    }

    render() {
        return (
            <div>
                <h1>Book Details Page</h1>
                <ExpenseDetails expense={this.props.expense}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      expense: state.expense
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchExpenseById: bookId => dispatch(bookActions.fetchExpenseById(bookId))
    };
};

ExpenseDetailsPage.propTypes = {
  fetchExpenseById : PropTypes.func,
  params : PropTypes.object,
  expense : PropTypes.object,
  id : PropTypes.number
};

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseDetailsPage);
