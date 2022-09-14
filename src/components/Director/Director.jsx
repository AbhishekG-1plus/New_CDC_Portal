import React from "react";
import "./Director.css";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import dirophoto from "../../img/Diro_IITJ.jpeg";


const Director = () => {
  return (
    <>
      <div className="director-column">
        <Grid container spacing={2}>
          
          <Grid item xs={12} sm={12} md={4}  sx={{display: 'flex',justifyContent: 'center',alignItems: 'center', flexDirection: 'column', gap:'12px', padding:'3px'}}>
            <div className="dir-heading"> <h2>Director, IIT Jodhpur</h2></div>
            <div className="diroimg"><img src={dirophoto} alt="" /></div>
            <div className="dir-name"> <h3>Prof.Shantanu Choudhary</h3></div>
          </Grid>
          
          <Grid item xs={12} sm={12} md={8} className="item3">
          <div className="dir-message">
            <h1>Director Message</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, temporibus sapiente. Nisi nobis totam quo provident temporibus. Excepturi, earum animi deleniti incidunt iure debitis ex vero reprehenderit. Labore eaque dolor ipsum. Pariatur, et eius harum libero repudiandae sunt? Ea, quae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, maiores praesentium? Quibusdam at cum a eius ullam deserunt odit mollitia, ut totam quia obcaecati accusamus sunt voluptates impedit. Deserunt, facere.</p>
          </div>
          </Grid>
    
        </Grid>
      </div>
    </>
  );
};

export default Director;
