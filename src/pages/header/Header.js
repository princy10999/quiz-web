import React from "react";
import Sidebar from "./../sidebar/Sidebar";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import coin from "../../assets/images/coin-icon.png";
import Notifications from "../../assets/images/notifications-icon.svg";
import quizLogo from "../../assets/images/logo.png";
import MenuIcon from "../../assets/images/menu-icon.svg";
import BackIcon from "../../assets/images/back-icon.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Header({ data }) {
  const location = useLocation();
  let navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const token = localStorage.getItem("token");

  return (
    <div className={location.pathname === "/quizPage" ? "d-none" : "header"}>
      <div className="headerLeft">
        <nav>
          <div>
            {location.pathname === "/" ? (
              <Button
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                className="header_btn_popup"
              >
                <img
                  className="headerSideIcon"
                  src={MenuIcon}
                  alt="Menu icon"
                />
              </Button>
            ) : (
              <label htmlFor="menu-control" className="sidebar-toggle">
                <Link className="" to="">
                  <img
                    className="headerSideIcon"
                    src={BackIcon}
                    alt="Back icon"
                    onClick={() => navigate("/")}
                  />
                </Link>
              </label>
            )}

            <Menu
              className="sidebar_menu_pop"
              id="demo-positioned-menu"
              aria-labelledby="demo-positioned-button"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <Sidebar setIsSlider={setAnchorEl} {...data} />
            </Menu>
          </div>
        </nav>
        <Link className="quizLogo" to="/">
          <img
            className="quizImage"
            src={quizLogo}
            alt="Quiz icon"
            title="Play Quiz"
          />
        </Link>
      </div>
      <div className="headerRight">
        <div className="headerCoins">
          <Link to={token === null ? "/googleLogin" : "/coin-history"}>
            <img
              src={coin}
              alt="Coin"
              className="pulse coinImg"
              height="24px"
            />
            <span>
              -30<span>Coins</span>
            </span>
          </Link>
        </div>
        <div className="notification ring">
          <img
            className="notification_img"
            src={Notifications}
            alt="Notifications"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
