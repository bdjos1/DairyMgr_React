import React, { PropTypes } from 'react';

const propTypes = {
  onLocaleChange: PropTypes.func.isRequired
};

const LocaleSelector = (props) => {
  return (
    <div>
      <div className="dropdown navBarLink">Preferences
        <div className="dropdown-content">
          <a className="" onClick={() => props.onLocaleChange('fr')}>French</a>
          <a className="" onClick={() => props.onLocaleChange('en-en')}>English</a>
        </div>
      </div>
    </div>
  );
};

LocaleSelector.propTypes = propTypes;
export default LocaleSelector;

