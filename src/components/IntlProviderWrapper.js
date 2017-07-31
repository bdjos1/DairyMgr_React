import React from 'react';
import { connect } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from '../routes';
import { addLocaleData, IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';


class IntlProviderWrapper extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){

  }

  render(){
    let i18n = this.props.i18n;
    let currentLocale = "en";
    let messages = {};
    if (i18n.length > 0) {
      currentLocale = i18n[i18n.length -1].locale;
      messages = i18n[i18n.length -1].messages;
    }

    let frLocaleData = require('react-intl/locale-data/en');
    addLocaleData(frLocaleData);

    return(
      <IntlProvider locale={currentLocale} messages={messages}>
        <Router routes={routes} history={browserHistory} />
      </IntlProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    i18n: state.i18n
  };
};

const mapDispatchToProps = () => {
  return {};
};

IntlProviderWrapper.propTypes = {
  i18n: PropTypes.array
};

export default connect(mapStateToProps,mapDispatchToProps)(IntlProviderWrapper);
