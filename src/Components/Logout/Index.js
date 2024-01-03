import React from "react";
import { GoogleLogout } from "react-google-login";

function Logout({ client_id }) {

  const logout = (res) => {
    console.log("---------------------------res", res);
    const auth2 = window.gapi.auth2.getAuthInstance();
    if (auth2 != null) {
      auth2.signOut().then(auth2.disconnect().then(localStorage.clear()));
    } else {
      console.log("----------some error=--------");
    }
  };

  function refreshPage() {
    window.location.reload();
   
  }

  return (
    <div className="ms-3">
      <GoogleLogout
        className="btn btn-small mt-8 shine"
        clientId={client_id}
        render={(renderProps) => (
          <button
     
            onClick={() => {
              renderProps.onClick();
              setTimeout(() => {
                refreshPage();
                
              }, 100);
            }}
            disabled={renderProps.disabled}
            className="btn btn-small mt-8 shine"
          >
            Logout
          </button>
        )}
        onLogoutSuccess={logout}
        isSignedIn={false}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
export default Logout;
