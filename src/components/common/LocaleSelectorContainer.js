import { connect } from 'react-redux';
import { updateLocale } from '../../actions/localeActions';
import LocaleSelector from './LocaleSelector';

const mapStateToProps = (state) => {
  return {
    locale: state.i18n.locale
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onLocaleChange: updateLocale({ dispatch })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocaleSelector);
