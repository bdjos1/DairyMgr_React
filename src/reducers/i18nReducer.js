export const i18nReducer = (state = [], action) => {
  switch (action.type) {
    case 'LOCALE_CHANGE':
      return action.i18n;
    default:
      return state;
  }
};
