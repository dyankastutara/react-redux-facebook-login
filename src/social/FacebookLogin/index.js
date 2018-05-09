import React from 'react';
import '../style.css';
class FacebookLogin extends React.Component{
  componentDidMount(){
    const {appId} = this.props;
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : appId,
        cookie     : true,  // enable cookies to allow the server to access
        xfbml      : true,  // parse social plugins on this page
        version    : 'v2.8' // use graph api version 2.8
      });
      window.FB.AppEvents.logPageView();
    };

    // Load the SDK asynchronously
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  facebookLogin = () =>{
    window.FB.login(
      function(response){
        this.statusChangeCallback(response);
      }.bind(this),{scope: 'public_profile,email'}
    )
  }

  cekLoginState(){
    window.FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    });
  }
  statusChangeCallback(response){
    if (response.status === 'connected') {
      this.getDataFacebook(response);
    } else {

    }
  }

  getDataFacebook = (data) =>{
    const self = this;
    window.FB.api('/me?fields=id,name,email,picture', function(response) {
      self.props.onSuccess(response)
    });
  }
  render(){
    const {
      cssStyle, buttonText
    } = this.props;
    return (
      <div onClick={()=>this.facebookLogin()} className="loginBtn loginBtn--facebook" style={cssStyle ? cssStyle : null}>{buttonText ? buttonText : 'Lanjutkan dengan Facebook'}</div>
    )
  }
}

export default FacebookLogin;
