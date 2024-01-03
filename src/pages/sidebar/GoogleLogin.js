import React, { useEffect } from "react";
import Login from "../../Components/Login/Index";
import { gapi } from "gapi-script";
import { useNavigate } from "react-router-dom";
import coin from "../../assets/images/coin-icon.png";
import { postResponse } from "../../Components/Api/CommonAPI.js";

export const client_id =
  "35615934829-t2jqr3qc76ts536be8em6gfijqn8rq5l.apps.googleusercontent.com";

function GoogleLogin() {
  const [isSignIn, setSignIn] = React.useState(false);

  const navigate = useNavigate();

  const handleFailure = (result) => {
    console.log(result);
  };

  const handleLogin = async (googleData) => {
    setSignIn(true);
    const response = await postResponse("api/social-login", {
      accessToken: googleData?.accessToken,
      googleId: googleData?.googleId,
      email: googleData?.profileObj?.email,
    });
    if (response.status === 200) {
      localStorage.setItem("token", response.data.success.token);
    }
    navigate("/");
  };

  useEffect(() => {
    gapi.load("client:auth2", () => {
      gapi.client.init({
        clientId: client_id,
        plugin_name: "chat",
      });
    });
  }, []);

  if (isSignIn) {
  }

  return (
    <div className="container">
      <div>
        <div className="signUpBox">
          <h1 className="signUpTitle">Sign up now &amp; Play Quiz</h1>
          <p className="signUpPlay">
            Play Quizzes and win
            <img className="quizImgCoin" src={coin} width="18" alt="Coin" />
          </p>
        </div>
        <div className="signUpSection">
          <Login
            handleFailure={handleFailure}
            handleLogin={handleLogin}
            client_id={client_id}
          />
        </div>
      </div>
      <section className="points">
        <h2>Play Quiz and Win Coins!</h2>
        <ul>
          <li>Get coins on the completion of each quiz.</li>
          <li>Upgrade your skills with our top quizzes.</li>
          <li>
            We have many top trending categories like Cricket, World, India,
            Business &amp; many more!
          </li>
          <li>Millions of quiz admirer like you showed trust on us.</li>
          <li>Challenge lakhs of players from across the world!</li>
        </ul>
      </section>
    </div>
  );
}

export default GoogleLogin;
