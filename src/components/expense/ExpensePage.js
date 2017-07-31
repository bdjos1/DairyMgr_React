import React,{PropTypes} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

class ExpensePage extends React.Component {

  constructor(props){
    super(props);
    this.activeDropdownId = null;
  }

  componentDidMount(){
  }

  componentWillUnmount() {}



  submitBook(input){
    this.props.createExpense(input);
  }

  goToModalLink() {

  }

  showDropdown(button) {
    // TODO: Should put proper error handling around this
    let buttonDivId = button.target.nextSibling;
    if (!buttonDivId) {
      buttonDivId = button.target.parentNode.nextSibling;
    }

    if (this.activeDropdownId != null && this.activeDropdownId !== buttonDivId.id) {
      let currentDropdownBtn = document.getElementById(this.activeDropdownId);
      // validate active element same as the variable tracking fr
      if (currentDropdownBtn) {
        currentDropdownBtn.classList.remove("show");
      }
    }

    let dropDownDiv = document.getElementById(buttonDivId.id);
    dropDownDiv.classList.toggle("show");
    this.activeDropdownId = buttonDivId.id;
  }

  render(){
    return(
      <div className="row">
        <div className="col-md-6">
          <div className="left-align">
            <FormattedMessage
              id="app.expenses" defaultMessage="Expenses">
              {(message) => <h3>{message}</h3>}
            </FormattedMessage>
          </div>
          <table className="table">
            <thead>
              <tr>
                <FormattedMessage
                  id="listExpenses.nameCol"
                  defaultMessage="Name">
                  {(message) => <th>{message}</th>}
                </FormattedMessage>
                <FormattedMessage
                  id="listExpenses.addressCol"
                  defaultMessage="Address">
                  {(message) => <th>{message}</th>}
                </FormattedMessage>
                <FormattedMessage
                  id="listExpenses.actionsCol"
                  defaultMessage="Actions">
                  {(message) => <th>{message}</th>}
                </FormattedMessage>
              </tr>
            </thead>
            <tbody>
            {this.props.expenses.map((b, i) => {
              return(
                <tr key={i}>
                  <td>{b.merchantName}</td>
                  <td>{b.merchantAddress}</td>
                  <td>
                    <button onMouseOver={this.showDropdown.bind(this)} className="dropbtn">
                      <FormattedMessage id="listExpenses.actionsCol" defaultMessage="Actions"/>
                    </button>
                    <div id={'myDropdown_' + b.id} className="dropdown-content">
                      <Link to={`/expenses/${b.id}`}>
                        <FormattedMessage id="viewExpenses" defaultMessage="View"/>
                      </Link>
                      <Link to={`/deleteExpense/${b.id}/false`}>
                        <FormattedMessage id="deleteExpenses" defaultMessage="Delete Exp"/>
                      </Link>

                    </div>
                  </td>
                </tr>
              );
            })}
            </tbody>
          </table>
        </div>
        <div className="col-md-6">
          <button className="dropbtn left-align bottom-button">
              <Link to={`/newExpense`}>
                <FormattedMessage id="newExpense" defaultMessage="New Exp"/>
              </Link>
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};

ExpensePage.propTypes = {
  expenses: PropTypes.array,
  createExpense: PropTypes.func,
};

export default connect(mapStateToProps)(ExpensePage);
