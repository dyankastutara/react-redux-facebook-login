import React from 'react';
import '../style.css';
class FacebookLogin extends React.Component{
  componentDidMount(){
    window.fbAsyncInit = function() {
      window.FB.init({
        appId      : '641795306161398',
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
    console.log("FB check login");
    window.FB.getLoginStatus(function(response) {
      this.statusChangeCallback(response);
    });
  }
  statusChangeCallback(response){
    console.log('statusChangeCallback');
    console.log(response);
    if (response.status === 'connected') {
      this.getDataFacebook(response);
    } else {

    }
  }

  getDataFacebook = (data) =>{
    console.log('Welcome!  get your information.... ');
    window.FB.api('/me?fields=id,name,email', function(response) {
      console.log(response);
      console.log('Successful login for: ' + response.name);
    });
  }
  render(){
    return (
      <div onClick={()=>this.facebookLogin()} className="loginBtn loginBtn--facebook">Login Facebook</div>
    )
  }
}

export default FacebookLogin;
