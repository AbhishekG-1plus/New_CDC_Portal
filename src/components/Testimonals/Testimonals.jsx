import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import "./Testimonal.css";
import ItemsCarousel from "react-items-carousel";

const Testimonals = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <div className="alumini_container">
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={3}
        infiniteLoop={true}
        autoPlay={500}
        disableSwipe={true}
        rightChevron={">"}
        leftChevron={"<"}
      >
        <Paper
          sx={{
            height: "300px",
            width: "309px",
            backgroundColor: "#F4FBF8",
            borderRadius: "5px",
            textAlign: "center",
            border: "1px solid black",
          }}
        >
          <div className="Alumini_name">Abhishek Kumar</div>
          <Card
            sx={{
              width: "67px",
              height: "67px",
              margin: "auto",
              background: "#F4FBF8",
              boxShadow:
                "-5px -5px 10px rgba(255, 255, 255, 0.6), 5px 5px 10px rgba(149, 192, 174, 0.11)",
              borderRadius: "33.5px",
              textAlign: "center",
              display: "flex",
            }}
          >
            <Card
              sx={{
                width: "40px",
                height: "40px",
                margin: "auto",
                background: "#F4FBF8",
                boxShadow:
                  "-5px -5px 10px rgba(255, 255, 255, 0.6), 5px 5px 10px rgba(149, 192, 174, 0.11)",
                borderRadius: "20px",
              }}
            >
              <img
                src="https://us.123rf.com/450wm/janista/janista2005/janista200500036/148120663-little-girl-conceptual-vector-illustration-contour-drawing.jpg?ver=6"
                alt="img"
                width="100%"
              />
            </Card>
          </Card>
          <div className="alimi_text">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum at odit consectetur quidem earum aspernatur saepe impedit quisquam. Quidem modi explicabo illum obcaecati. Mollitia optio ut ad assumenda dolores incidunt.</p>
          </div>
        </Paper>
     
      </ItemsCarousel>
    </div>
  );
};
export default Testimonals;
