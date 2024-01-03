import React from 'react';
import { GoogleLogin } from 'react-google-login';

function Login({ client_id, handleFailure, handleLogin }) {
  return (
    <div className='login_page'>
      <br />
      <GoogleLogin
        clientId={client_id}
        buttonText='Sign in with Google'
        onSuccess={handleLogin}
        onFailure={handleFailure}
        isSignedIn={true}
        cookiePolicy={'single_host_origin'}
      ></GoogleLogin>
    </div>
  );
}

export default Login;
