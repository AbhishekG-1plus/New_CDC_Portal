import React from "react";
import "./styles/aboutUS.css";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import {
  CenterFocusStrong,
  CenterFocusStrongRounded,
  CenterFocusWeakOutlined,
} from "@material-ui/icons";

const aboutUS = ({}) => {
  return (
    <div className="AboutUs">
      <h1>CAREER DEVELOPMENT CELL </h1>

      <div className="About">
        <Grid container spacing={4} className="conatainer1" >
          <Grid item xs={12} sm={6} md={4} className="item1">
            <Card className="card1">
              <a className="icon1">

                <div class="circle" >
                <SchoolRoundedIcon
                  className="iconschool"
                  color="success"
                  sx={{ fontSize: 150 }}
                />
                </div>
                
                <h3>CAPTION1</h3>
                <p>
                  We, the Career Development Cell aim to create an encouraging
                  atmcies in sync with their dream careers, thereby ensuring a
                  smooth landing into the professional world.{" "}
                </p>
              </a>
            </Card>
          </Grid>
          

          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <a className="icon1">

              <div class="circle">
              <MilitaryTechIcon color="success" sx={{ fontSize: 150 }} />
              </div>



                
                <h3>CAPTION2 </h3>
                <p>
                  We, the Career Development Cell aim to create an encouraging
                  atmcies in sync with their dream careers, thereby ensuring a
                  smooth landing into the professional world.
                </p>
              </a>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card >
              <a className="icon1">

              <div class="circle">
              <LocalLibraryIcon color="success" sx={{ fontSize: 150 }} />
              </div>

                
                <h3>CAPTION3 </h3>
                <p>
                  We, the Career Development Cell aim to create an encouraging
                  atmcies in sync with their dream careers, thereby ensuring a
                  smooth landing into the professional world.
                </p>
              </a>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default aboutUS;
