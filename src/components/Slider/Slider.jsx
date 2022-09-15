import React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";

import ItemsCarousel from "react-items-carousel";


const CardSlider = () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  return (
    <Card
      sx={{
        height: "250px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#fbfbfb",
        // border: "1px solid red",
        marginBottom: "70px",
        padding: "20px",
      }}
    >
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={5}
        // gutter={1}
        infiniteLoop={true}
        autoPlay={500}
        disableSwipe={true}
        rightChevron={">"}
        leftChevron={"<"}
      >
        <Paper
          sx={{
            height: "170px",
            width: "170px",
            backgroundColor: "#FAFAFA",
            boxShadow:
              "inset -5px -5px 20px #FFFFFF, inset 5px 5px 20px rgba(0, 0, 0, 0.06)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border:'1px solid black',
          
           
          }}
        >
          <Card
            sx={{
              height: "100px",
              width: "100px",
              backgroundColor: "white",
              display: "flex",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}
          >
            <Card
              sx={{
                height: "60px",
                width: "60px",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://www.freepnglogos.com/uploads/microsoft-logos-png-images-24.png"
                alt="microsoft logos png images"
                width="100%"
              />
            </Card>
          </Card>
        </Paper>
        <Paper
          sx={{
            height: "170px",
            width: "170px",
            backgroundColor: "#FAFAFA",
            boxShadow:
              "inset -5px -5px 20px #FFFFFF, inset 5px 5px 20px rgba(0, 0, 0, 0.06)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border:'1px solid black',
          
           
          }}
        >
          <Card
            sx={{
              height: "100px",
              width: "100px",
              backgroundColor: "white",
              display: "flex",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}
          >
            <Card
              sx={{
                height: "60px",
                width: "60px",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://www.freepnglogos.com/uploads/microsoft-logos-png-images-24.png"
                alt="microsoft logos png images"
                width="100%"
              />
            </Card>
          </Card>
        </Paper>
        <Paper
          sx={{
            height: "170px",
            width: "170px",
            backgroundColor: "#FAFAFA",
            boxShadow:
              "inset -5px -5px 20px #FFFFFF, inset 5px 5px 20px rgba(0, 0, 0, 0.06)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border:'1px solid black',
          
           
          }}
        >
          <Card
            sx={{
              height: "100px",
              width: "100px",
              backgroundColor: "white",
              display: "flex",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}
          >
            <Card
              sx={{
                height: "60px",
                width: "60px",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://www.freepnglogos.com/uploads/microsoft-logos-png-images-24.png"
                alt="microsoft logos png images"
                width="100%"
              />
            </Card>
          </Card>
        </Paper>
        <Paper
          sx={{
            height: "170px",
            width: "170px",
            backgroundColor: "#FAFAFA",
            boxShadow:
              "inset -5px -5px 20px #FFFFFF, inset 5px 5px 20px rgba(0, 0, 0, 0.06)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border:'1px solid black',
          
           
          }}
        >
          <Card
            sx={{
              height: "100px",
              width: "100px",
              backgroundColor: "white",
              display: "flex",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}
          >
            <Card
              sx={{
                height: "60px",
                width: "60px",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://www.freepnglogos.com/uploads/microsoft-logos-png-images-24.png"
                alt="microsoft logos png images"
                width="100%"
              />
            </Card>
          </Card>
        </Paper>
        <Paper
          sx={{
            height: "170px",
            width: "170px",
            backgroundColor: "#FAFAFA",
            boxShadow:
              "inset -5px -5px 20px #FFFFFF, inset 5px 5px 20px rgba(0, 0, 0, 0.06)",
            borderRadius: "5px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border:'1px solid black',
          
           
          }}
        >
          <Card
            sx={{
              height: "100px",
              width: "100px",
              backgroundColor: "white",
              display: "flex",
              borderRadius: "5px",
              justifyContent: "center",
              alignItems: "center",
              boxShadow:
                "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            }}
          >
            <Card
              sx={{
                height: "60px",
                width: "60px",
                backgroundColor: "white",
                display: "flex",
                borderRadius: "5px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src="https://www.freepnglogos.com/uploads/microsoft-logos-png-images-24.png"
                alt="microsoft logos png images"
                width="100%"
              />
            </Card>
          </Card>
        </Paper>
       
      
      
     
        
      </ItemsCarousel>
    </Card>
  );
};

export default CardSlider;
