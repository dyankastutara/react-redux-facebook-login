import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FacebookLogin from '../../social/facebooklogin/index';

export default class Login extends Component{
  static propTypes = {
    onSuccess: PropTypes.func
  }
  _onSuccessLogin = (data)=>{
    console.log(data);
  }
  render(){
    return(
      <FacebookLogin
        appId='641795306161398'
        buttonText="Masuk dengan Facebook"
        onSuccess={this._onSuccessLogin}
      />
    )
  }
}
