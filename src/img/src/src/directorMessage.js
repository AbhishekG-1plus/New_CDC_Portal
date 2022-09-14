import React from "react";
import "./styles/directorMessage.css";
import Grid from "@mui/material/Grid";


import Avatar from "@mui/material/Avatar";

import dirophoto from "./data/Diro_IITJ.jpeg";


const DirectorMessage = () => {
  return (
    <>
      <div className="conatainer2">
        <Grid container spacing={0} className="conatainer2">
          
          <Grid item xs={12} sm={12} md={4} className="item2">
            <div className="diroimg">
              <h1>Prof.Shantanu Choudhary</h1>
              <Avatar
                className="diropic"
                src={dirophoto}
                alt="Diro IITJ"
                sx={{ width: 200, height: 200 }}
              />
            </div>
          </Grid>
          
          <Grid item xs={12} sm={12} md={8} className="item3">
          <div className="Message">
            <h1>Director Message</h1>
          </div>
          </Grid>
          
        </Grid>
      </div>
    </>
  );
};

export default DirectorMessage;
