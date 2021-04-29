/* eslint-disable no-alert */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { forgot: false };
  }

  forgot() {
    this.setState({ forgot: true });
  }

  render() {
    return (
      <div>
        {this.state.forgot === false && (
        <div>
          <button type="button" onClick={this.forgot.bind(this)}>Mot de passe oublié</button>
        </div>
        )}
        {this.state.forgot === true && <ForgotPassword />}
      </div>
    );
  }
}

class ForgotPassword extends React.Component {
  reset() {
    alert('Password is sent to your email');
  }

  render() {
    return (
      <div><h1>Write your email</h1>
        <input />
        <button type="button" onClick={this.reset.bind(this)}>Reset Password</button>

      </div>
    );
  }
}
