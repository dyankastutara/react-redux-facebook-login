import React from 'react';

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
      }.bind(this)
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
      this.getDataFacebook();
    } else {

    }
  }

  getDataFacebook = () =>{
    console.log('Welcome!  get your information.... ');
    window.FB.api('/me', function(response) {
      window.FB.api(`/${response.id}`,'GET',{},function(res){
        console.log(res);
        console.log('Successful login for: ' + response.name);
      })
    });
  }
  render(){
    return <img
      src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-9/31562081_10157324683366729_5005221974700457984_n.png?_nc_cat=0&oh=b3d657959c8f5001c01b5cb9e9f49db4&oe=5B8A0D79"
      title="facebook"
      onClick={()=>this.facebookLogin()}
      alt="facebook"
      style={{width:50, height:50}}
      />
  }
}

export default FacebookLogin;
