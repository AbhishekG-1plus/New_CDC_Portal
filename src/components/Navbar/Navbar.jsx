import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import BusinessIcon from '@mui/icons-material/Business';
import GroupsIcon from '@mui/icons-material/Groups';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import "./style.css";
const Navbar = () => {
  return (
    <>
      <div className="sidebar close">
        <div className="logo-details">
          <i className="bx bxl-cplus-plus"> </i>
          {/* <span className="logo_name"> IIT CDC</span> */}
          <img src="" alt="" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="./">
              <i className="bx"><HomeIcon/> </i>
            </a>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="./">
                  HOME
                </a>
              </li>
              <li>
                <a href="./">ABOUT US</a>
              </li>
              <li>
                <a href="./">DIRECTOR'S MESSAGE</a>
              </li>
              <li>
                <a href="./">CHAIRMAN'S MESSAGE</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="./">
                <i className="bx"><SchoolIcon/> </i>
              </a>
              {/* <i className="bx bxs-chevron-down arrow"></i> */}
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="./">
                  ACADEMICS
                </a>
              </li>
              <li>
                <a href="./">PROGRAMMES</a>
              </li>
              <li>
                <a href="./">COURSE HIGHLIGHTS</a>
              </li>
              <li>
                <a href="./">GRADE SYSTEM</a>
              </li>
              <li>
                <a href="./">ADMISSION PROCEDURE</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="./">
                <i className="bx"><PersonOutlineIcon/></i>
              </a>
              {/* <i className="bx bxs-chevron-down"></i> */}
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="./">
                  STUDENTS
                </a>
              </li>
              <li>
                <a href="./">STUDENT CORNER</a>
              </li>
              <li>
                <a href="./">ACHIEVEMENTS</a>
              </li>
              <li>
                <a href="./">REGISTRATION PROCEDURE</a>
              </li>
              <li>
                <a href="./">CAREER DEVELOPMENT ACTIVITY</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="./">
                <i className="bx"> <BusinessIcon/> </i>
              </a>
              {/* <i className="bx bxs-chevron-down"></i> */}
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="./">
                  RECRUITER
                </a>
              </li>
              <li>
                <a href="./">WHY RECURIT?</a>
              </li>
              <li>
                <a href="./">BROCHURE</a>
              </li>
              <li>
                <a href="./">PLACEMENT STATISTICS </a>
              </li>
              <li>
                <a href="./">PLACEMENT PROCEDURE</a>
              </li>
              <li>
                <a href="./">PAST REDRUITERS</a>
              </li>
          
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="./">
                <i className="bx"><ListAltIcon/></i>
              </a>
             
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="./">
                  FORMS
                </a>
              </li>
              <li>
                <a href="./">JAF</a>
              </li>
              <li>
                <a href="./">IAF</a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="./">
                <i className="bx"><GroupsIcon/> </i>
              </a>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="./">
                  CDC-TEAM
                </a>
              </li>
              <li>
                <a href="./">CONTACT US</a>
              </li>
              <li>
                <a href="./">PLACEMENT TEAM</a>
              </li>
              <li>
                <a href="./">CAREER COUNSELLING <br/> COMMITTEE  MEMBERS </a>
              </li>
            </ul>
          </li>
          <li>
            <div className="icon-link">
              <a href="./">
                <i className="bx "><ExitToAppIcon/> </i>
              </a>
            </div>
            <ul className="sub-menu">
              <li>
                <a className="link_name" href="./">
                  LOGIN
                </a>
              </li>
              <li>
                <a href="./">RECRUITER LOGIN</a>
              </li>
              <li>
                <a href="./">STUDENT LOGIN</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
