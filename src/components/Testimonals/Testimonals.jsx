import React from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import "./Testimonal.css";
import AliceCarousel from "react-alice-carousel";

const Testimonials = () => {
  var responsive = {
    0: { items: 1 },
    600: { items: 2 },
    1024: { items: 3 },
    
  };

  return (
    <AliceCarousel
      autoPlay={false}
      responsive={responsive}
      autoPlayInterval={1100}
      mouseTracking={true}
      infinite={true}
      animationType="fadeout"
      disableButtonsControls={false}
      disableDotsControls={true}
    >
      <Paper
        sx={{
          height: "400px",
          width: "309px",
          backgroundColor: "#F4FBF8",
          display: "flex",
          flexDirection: "column",
          justifyContent: 'space-around',
          alignItems: "center",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          padding: "7px"

        }}
      >
        <div className="Alumini_name">Abhishek Kumar</div>

        <Card
          sx={{
            width: "167px",
            height: "167px",
            background: "#F4FBF8",
            boxShadow:
              "-5px -5px 10px rgba(255, 255, 255, 0.6), 5px 5px 10px rgba(149, 192, 174, 0.11)",
            borderRadius: "83.5px",
            textAlign: "center",
            display: "flex",
          }}
        >
          <Card
            sx={{
              width: "100px",
              height: "100px",
              margin: "auto",
              background: "#F4FBF8",
              boxShadow:
                "-5px -5px 10px rgba(255, 255, 255, 0.6), 5px 5px 10px rgba(149, 192, 174, 0.11)",
              borderRadius: "50%",
            }}
          >
            <img
              src="https://us.123rf.com/450wm/janista/janista2005/janista200500036/148120663-little-girl-conceptual-vector-illustration-contour-drawing.jpg?ver=6"
              alt="img "
              width="100%"
            />
          </Card>
        </Card>

        <div className="Alumini_data">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum fugit et iusto consequuntur! Consequatur, hic? Aut itaque ex accusantium atque consequatur eos, nemo optio facere, quis, eius totam architecto?</p>
        </div>

      </Paper>
      <Paper
        sx={{
          height: "400px",
          width: "309px",
          backgroundColor: "#F4FBF8",
          display: "flex",
          flexDirection: "column",
          justifyContent: 'space-around',
          alignItems: "center",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          padding: "7px"

        }}
      >
        <div className="Alumini_name">Abhishek Kumar</div>

        <Card
          sx={{
            width: "167px",
            height: "167px",
            background: "#F4FBF8",
            boxShadow:
              "-5px -5px 10px rgba(255, 255, 255, 0.6), 5px 5px 10px rgba(149, 192, 174, 0.11)",
            borderRadius: "83.5px",
            textAlign: "center",
            display: "flex",
          }}
        >
          <Card
            sx={{
              width: "100px",
              height: "100px",
              margin: "auto",
              background: "#F4FBF8",
              boxShadow:
                "-5px -5px 10px rgba(255, 255, 255, 0.6), 5px 5px 10px rgba(149, 192, 174, 0.11)",
              borderRadius: "50%",
            }}
          >
            <img
              src="https://us.123rf.com/450wm/janista/janista2005/janista200500036/148120663-little-girl-conceptual-vector-illustration-contour-drawing.jpg?ver=6"
              alt="img "
              width="100%"
            />
          </Card>
        </Card>

        <div className="Alumini_data">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum fugit et iusto consequuntur! Consequatur, hic? Aut itaque ex accusantium atque consequatur eos, nemo optio facere, quis, eius totam architecto?</p>
        </div>

      </Paper>
      <Paper
        sx={{
          height: "400px",
          width: "309px",
          backgroundColor: "#F4FBF8",
          display: "flex",
          flexDirection: "column",
          justifyContent: 'space-around',
          alignItems: "center",
          borderRadius: "5px",
          boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
          padding: "7px"

        }}
      >
        <div className="Alumini_name">Abhishek Kumar</div>

        <Card
          sx={{
            width: "167px",
            height: "167px",
            background: "#F4FBF8",
            boxShadow:
              "-5px -5px 10px rgba(255, 255, 255, 0.6), 5px 5px 10px rgba(149, 192, 174, 0.11)",
            borderRadius: "83.5px",
            textAlign: "center",
            display: "flex",
          }}
        >
          <Card
            sx={{
              width: "100px",
              height: "100px",
              margin: "auto",
              background: "#F4FBF8",
              boxShadow:
                "-5px -5px 10px rgba(255, 255, 255, 0.6), 5px 5px 10px rgba(149, 192, 174, 0.11)",
              borderRadius: "50%",
            }}
          >
            <img
              src="https://us.123rf.com/450wm/janista/janista2005/janista200500036/148120663-little-girl-conceptual-vector-illustration-contour-drawing.jpg?ver=6"
              alt="img "
              width="100%"
            />
          </Card>
        </Card>

        <div className="Alumini_data">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit rerum fugit et iusto consequuntur! Consequatur, hic? Aut itaque ex accusantium atque consequatur eos, nemo optio facere, quis, eius totam architecto?</p>
        </div>

      </Paper>

   
    </AliceCarousel>
  );
};
export default Testimonials;
