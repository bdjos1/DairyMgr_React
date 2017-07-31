import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import * as bookActions from './actions/expenseActions';
import * as localeActions from './actions/localeActions';
import { addLocaleData} from 'react-intl';
import IntlProviderWrapper from './components/IntlProviderWrapper';

import configureStore from './store/configureStore';

let enLocaleData = require('react-intl/locale-data/en');
let frLocaleData = require('react-intl/locale-data/fr');
addLocaleData(enLocaleData);
addLocaleData(frLocaleData);


const store = configureStore();

store.dispatch(bookActions.fetchExpenses());
store.dispatch(localeActions.getLocaleMessages());

render(
  <Provider store={store}>
    <IntlProviderWrapper/>
  </Provider>,

  document.getElementById('app')
);
