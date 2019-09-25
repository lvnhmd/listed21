import PropTypes from 'prop-types';
import React, { Component } from 'react';

import SocialLogin from 'react-social-login';

class Button extends Component {
  static propTypes = {
    triggerLogin: PropTypes.func.isRequired,
    triggerLogout: PropTypes.func.isRequired
  };

  render() {
    const { children, triggerLogin, triggerLogout, ...props } = this.props;
    return (
      <div className='gallery' onClick={triggerLogin} {...props}>
        {children}
      </div>
    );
  }
}

export default SocialLogin(Button);
