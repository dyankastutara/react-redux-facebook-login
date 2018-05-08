import React from 'react';

class FacebookLogin React.Component{
  facebookLogin = () =>{
    window.FB.login(
      function(response){
        this.statusChangeCallback(response);
      }.bind(this)
    )
  }
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
  render(){
    return null
  }
}
