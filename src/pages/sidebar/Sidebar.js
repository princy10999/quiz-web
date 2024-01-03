import React from "react";
import { FaFacebookF, FaTwitter, FaPinterestP } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineFlag } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import EventRepeatIcon from "@mui/icons-material/EventRepeat";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";
import Logout from "../../Components/Logout/Index";
import { Link } from "react-router-dom";
import { client_id } from "./GoogleLogin";
import tigericon from "../../assets/images/aq-icon.png"
import avatar from "../../assets/images/male-user-avatar.png"


function Sidebar(data) {

  const token = localStorage.getItem("token");

  return (
    <div className="sidebar">
      <div className="left_menu">
        <div className="welcome_profile">
          <div className="btn_profile_home">
            <div className="btns_close_home">
              <div className="tiger-icon">
                <a href="/">
                  <img
                    src={tigericon}
                    alt="tiger"
                    width="35px"
                  />
                </a>
              </div>
              <div className="close" onClick={() => data.setIsSlider(null)}>
                <IoMdClose className="menu_Icon" />
              </div>
            </div>
            <div className="profile_pic">
              <img
                src={avatar}
                alt="User Avatar"
              />
            </div>
          </div>
          {token === null ? (
            <div className="user_details">
              <h3>Welcome!</h3>
              <p>play Quiz &amp; earn coins</p>
              <div onClick={() => data.setIsSlider(null)}>
                <Link className="btn btn-small mt-8 shine" to="/googleLogin">
                  Sign In
                </Link>
              </div>
            </div>
          ) : (
            <div className="user_details">
              <h3>Welcome!</h3>
              <p>play Quiz &amp; earn coins</p>
              <div onClick={() => data.setIsSlider(null)}>
                <Logout client_id={client_id} />
              </div>
            </div>
          )}
        </div>
        <div className="menu_items">
          <ul>
            <li onClick={() => data.setIsSlider(null)}>
              <Link to="/contestRules">
                <i className="icon">
                  <ReceiptLongIcon className="menu_Icon" />
                </i>
                Contest Rules<i className="arrow right"></i>
              </Link>
            </li>
            <li onClick={() => data.setIsSlider(null)}>
              <Link to="/googleLogin">
                <i className="icon">
                  <EventRepeatIcon className="menu_Icon" />{" "}
                </i>
                Coin History<i className="arrow right"></i>
              </Link>
            </li>
            <li onClick={() => data.setIsSlider(null)}>
              <Link to="aboutUs">
                <i className="icon">
                  {" "}
                  <IoPersonOutline className="menu_Icon" />
                </i>
                About Us<i className="arrow right"></i>
              </Link>
            </li>
            <li onClick={() => data.setIsSlider(null)}>
              <Link to="/contactUs">
                <i className="icon">
                  {" "}
                  <PermPhoneMsgIcon className="menu_Icon" />
                </i>
                Contact Us<i className="arrow right"></i>
              </Link>
            </li>
            <li onClick={() => data.setIsSlider(null)}>
              <a href="/">
                <i className="icon">
                  <AiOutlineFlag className="menu_Icon" />
                </i>
                Report and Issue<i className="arrow right"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="connect_with_us">
          <h4 className="connect">Connect with us</h4>
          <ul>
            <li>
              <a
                href="https://www.facebook.com/Atmegame"
                target="_blank"
                rel="noreferrer"
              >
                <i className="social_icon">
                  <FaFacebookF className="SocialIcon_btn" />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/ATMEGAME"
                target="_blank"
                rel="noreferrer"
              >
                <i className="social_icon">
                  {" "}
                  <FaTwitter className="SocialIcon_btn" />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/atmegame/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="social_icon">
                  {" "}
                  <FiInstagram className="SocialIcon_btn" />
                </i>
              </a>
            </li>
            <li>
              <a
                href="https://in.pinterest.com/atmegame/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="social_icon">
                  {" "}
                  <FaPinterestP className="SocialIcon_btn" />
                </i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Sidebar;
