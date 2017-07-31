import * as actionTypes from './actionTypes';
import Axios from 'axios';

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them
let defaultLanguage = (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage;

let langWithoutRegionCode = (language) => language.toLowerCase().split(/[_-]+/)[0];

export const localeDataSuccess = (i18n) => {
  return {
    type: actionTypes.LOCALE_MESSAGES_SUCCESS,
    i18n
  };
};


export const getLocaleMessages = (selectedLocale) => {
  return (dispatch) => {
    let defaultLocale = defaultLanguage.indexOf("_") != -1 ? langWithoutRegionCode(defaultLanguage) : defaultLanguage;
    let locale = selectedLocale ? selectedLocale : defaultLocale;
    return Axios.get("i18n/" + locale + "/data.json")
      .then(response => {
        let i18n = [];
        i18n.push({locale:locale, messages: response.data});
        dispatch(localeDataSuccess(i18n));
      })
      .catch(error => {
        throw(error);
      });
    /*let i18n = [];
    i18n.push({locale:locale, messages: "123"});
    dispatch(localeDataSuccess(i18n));*/
  };
};

export const LOCALE_CHANGE = 'LOCALE_CHANGE';

// ------------------------------------
// Actions
// ------------------------------------
export function localeChange (locale) {
  return {
    type : LOCALE_CHANGE,
    payload : locale
  };
}

// ------------------------------------
// Specialized Action Creator
// ------------------------------------
export const updateLocale = ({ dispatch }) => {
  return (nextLocale) => dispatch(getLocaleMessages(nextLocale));
};
