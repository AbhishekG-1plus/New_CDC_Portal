import React from "react";
import "./About.css";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import Grid from "@mui/material/Grid";


const About = () => {
  return (
    <div className="about-us-page">
      <div className="about-heading">
        <h1>
          CAREER DEVELOPMENT CELL <span>IIT Jodhpur</span>
        </h1>
      </div>
      <div className="about-us-image-col">
        <Grid container spacing={1} sx={{marginTop:'7px'}}>
          <Grid item xs={12} sm={6} md={4}>
            <div className="about-col-cards">
                 {/* ----Image--- */}
                <div className="about-col-image">
                  <SchoolRoundedIcon
                    className="iconschool"
                    id="roundedicon1"
                    // color="success"
                    sx={{ fontSize: 200 }}/>
                </div>
                 {/* ----Information--- */}
                <div className="about-col-info">
                  <h3>CAPTION1</h3>
                  <p>
                    We, the Career Development Cell aim to create an encouraging
                    atmcies in sync with their dream careers, thereby ensuring a
                    smooth landing into the professional world. lorem
                  </p>
                </div>  
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="about-col-cards">
                 {/* ----Image--- */}
                <div className="about-col-image">
                  <SchoolRoundedIcon
                    className="iconschool"
                    id="roundedicon2"
                    // color="success"
                    sx={{ fontSize: 200 }}/>
                </div>
                 {/* ----Information--- */}
                <div className="about-col-info">
                  <h3>CAPTION1</h3>
                  <p>
                    We, the Career Development Cell aim to create an encouraging
                    atmcies in sync with their dream careers, thereby ensuring a
                    smooth landing into the professional world.
                  </p>
                </div>  
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <div className="about-col-cards">
                 {/* ----Image--- */}
                <div className="about-col-image">
                  <SchoolRoundedIcon
                    className="iconschool"
                    id="roundedicon3"
                    // color="success"
                    sx={{ fontSize: 200 }}/>
                </div>
                 {/* ----Information--- */}
                <div className="about-col-info">
                  <h3>CAPTION1</h3>
                  <p>
                    We, the Career Development Cell aim to create an encouraging
                    atmcies in sync with their dream careers, thereby ensuring a
                    smooth landing into the professional world.
                  </p>
                </div>  
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default About;
