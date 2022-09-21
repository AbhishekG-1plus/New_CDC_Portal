import { Card } from "@mui/material";
import React from "react";
import "./Footer.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

const Footer = () => (
  <div className="footer-container">
    {/* ----------------left footer container  --------------- */}
    <div className="left-footer-container">
      <div className="upper-footer-container flex-row">
        <div className="external-links">
          <div className="footer-inner-heading">
            <h1> External links</h1>
          </div>
          <div className="footer-list">
            <ul>
              <li>IIT Jodhpur</li>
              <li> Student Gymkhana</li>
            </ul>
          </div>
        </div>
        <div className="external-links">
          <div className="footer-inner-heading">
            <h1>Quick Links</h1>
          </div>
          <div className="footer-list">
            <ul>
              <li>Meet our Team</li>
              <li>AIPC Norms</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lower-footer-container flex-col">
        <div>
          <div className="footer-icons">
            <LinkedInIcon sx={{ margin: "15px" }} />
            <LanguageIcon sx={{ margin: "15px" }} />
            <PhoneIcon sx={{ margin: "15px" }} />
          </div>
          <div className="footer-icons">
            <MailOutlineIcon sx={{ margin: "15px" }} />
            placement@iitj.ac.in
          </div>
        </div>
      </div>
    </div>

    {/* ----------------middle logo container  --------------- */}
    <div className="middle-footer-container">
      <Card
        sx={{
          height: "200px",
          width: "200px",
          borderRadius: "100px",
          boxShadow:
            "-8px -8px 16px rgba(64, 153, 121, 0.42), 8px 8px 16px #175E44",
          background: "#2B7E60",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          sx={{
            height: "160px",
            width: "160px",
            borderRadius: "80px",
            boxShadow:
              "inset -8px -8px 16px rgba(64, 153, 121, 0.42), inset 8px 8px 16px #175E44",
            background: "#2B7E60",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Card
            sx={{
              height: "100px",
              width: "100px",
              borderRadius: "50px",
              boxShadow:
                "-8px -8px 16px rgba(64, 153, 121, 0.42), 8px 8px 16px #175E44",
              background: "#2B7E60",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="footer-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/2/25/Logo_IITJ.png"
              alt="iitjlogo"
              width="70%"
            />
          </Card>
        </Card>
      </Card>
    </div>

    {/* ----------------right footer container  --------------- */}
    <div className="right-footer-container">
      <div className="upper-footer-container flex-row">
        <div className="external-links">
          <div className="footer-inner-heading">
            <h1>Placement Links</h1>
          </div>
          <div className="footer-list">
            <ul>
              <li>Placement Registration Link</li>
              <li>Placement Statistics</li>
            </ul>
          </div>
        </div>
        <div className="external-links">
          <div className="footer-inner-heading">
            <h1> Downloads</h1>
          </div>
          <div className="footer-list">
            <ul>
              <li>JAF</li>
              <li>IAF</li>
              <li>Brochure</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="lower-footer-container flex-col">
        <div className="footer-inner-heading">
          <h1>CDC IIT Jodhpur</h1>
        </div>
        <div className="footer-list">
          <p>
            Indian Institute of Technology Jodhpur NH 65 Nagaur Road Karwar
            342037, Jodhpur District
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;
