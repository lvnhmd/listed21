import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import SocialButton from './social-button';
import axios from 'axios';
import { LOGIN_USER } from '../actions/types';
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logged: false,
      user: {},
      currentProvider: ''
    };
    this.nodes = {};

    this.onLoginSuccess = this.onLoginSuccess.bind(this);
    this.onLoginFailure = this.onLoginFailure.bind(this);
    this.onLogoutSuccess = this.onLogoutSuccess.bind(this);
    this.onLogoutFailure = this.onLogoutFailure.bind(this);
    this.logout = this.logout.bind(this);
  }

  setNodeRef(provider, node) {
    if (node) {
      this.nodes[provider] = node;
    }
  }

  onLoginSuccess(user) {
    localStorage.setItem('user', JSON.stringify(user));
    this.props.dispatch({ type: LOGIN_USER, payload: JSON.stringify(user) });
    this.props.history.push('/');

    axios
      .post(`${process.env.REACT_APP_API_URL}/user`, user)
      .then(() => {
        console.log('record user success');
      })
      .catch(response => {
        console.log('record user : something went wrong ', response);
      });
  }

  onLoginFailure(err) {
    console.error(err);

    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    });
  }

  onLogoutSuccess() {
    this.setState({
      logged: false,
      currentProvider: '',
      user: {}
    });
  }

  onLogoutFailure(err) {
    console.error(err);
  }

  logout() {
    const { logged, currentProvider } = this.state;

    if (logged && currentProvider) {
      this.nodes[currentProvider].props.triggerLogout();
    }
  }

  render() {
    let children;

    children = [
      <SocialButton
        provider='facebook'
        appId='1819960984999515'
        onLoginSuccess={this.onLoginSuccess}
        onLoginFailure={this.onLoginFailure}
        onLogoutSuccess={this.onLogoutSuccess}
        getInstance={this.setNodeRef.bind(this, 'facebook')}
        key={'facebook'}
      >
        <div className='btn'>
          login with facebook
          {/* the below line is for when/if I want to add an icon */}
          {/* <span className='icon'></span>login with facebook<span></span> */}
        </div>
      </SocialButton>,
      <SocialButton
        autoCleanUri
        provider='instagram'
        appId='afdf675d26214280ac9a792afea5651c'
        redirect={process.env.INSTAGRAM_REDIRECT}
        onLoginSuccess={this.onLoginSuccess}
        onLoginFailure={this.onLoginFailure}
        onLogoutSuccess={this.onLogoutSuccess}
        getInstance={this.setNodeRef.bind(this, 'instagram')}
        key={'instagram'}
      >
        <div className='btn'>login with instagram</div>
      </SocialButton>
    ];

    return children;
  }
}
const mapStateToProps = ({ user }) => ({ user });
export default withRouter(connect(mapStateToProps)(Login));
