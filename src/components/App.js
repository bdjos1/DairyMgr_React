import React, {PropTypes}  from 'react';
import {Link} from 'react-router';
import LocalSelector from './common/LocaleSelectorContainer';
import { FormattedMessage } from 'react-intl';
import './app.css';

class App extends React.Component{

  constructor(props){
    super(props);
  }


  render(){
    return(
    <div>
      <header className="banner">
        <nav>
          <LocalSelector/>
          <Link className="navBarLink" to="/expenses"> <FormattedMessage id="app.expenses" defaultMessage="Expenses"/></Link>
          <Link className="navBarLink" to="/"><FormattedMessage id="bannerHome" defaultMessage="Home"/></Link>
        </nav>
      </header>
      {/* Each smaller components */}
      {this.props.children}
    </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object
};

export default App;
