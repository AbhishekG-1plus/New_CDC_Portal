
import React from 'react';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const CardSlider = () => {
  var responsive = {

    0: { items: 1 },
    200: { items: 2 },
    512: { items: 3 },
    1024: { items: 5 }

  }
  return (
    <Card sx={{
      backgroundColor: "#fff",
      height: "260px",
      // boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
      boxShadow:"none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: "70px"

    }}>
      <AliceCarousel
        autoPlay
        responsive={responsive}
        // interval={1}
        autoPlayInterval={1100}
        mouseTracking={true}
        infinite={true}
        disableButtonsControls={false}
        disableDotsControls={true}
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

              }}>
              <img
                src="https://www.freepnglogos.com/uploads/microsoft-logos-png-images-24.png"
                alt="microsoft logos png images"
                width="100%"
              />
            </Card>
          </Card>
        </Paper>
        <Paper className='center'
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

              }}>
              <img
                src="https://www.freepnglogos.com/uploads/microsoft-logos-png-images-24.png"
                alt="microsoft logos png images"
                width="100%"
              />
            </Card>
          </Card>
        </Paper>
        <Paper className='center'
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

              }}>
              <img
                src="https://www.freepnglogos.com/uploads/microsoft-logos-png-images-24.png"
                alt="microsoft logos png images"
                width="100%"
              />
            </Card>
          </Card>
        </Paper>
        <Paper className='center'
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

              }}>
              <img
                src="https://www.freepnglogos.com/uploads/microsoft-logos-png-images-24.png"
                alt="microsoft logos png images"
                width="100%"
              />
            </Card>
          </Card>
        </Paper>
      </AliceCarousel>
    </Card>
  )
}
export default CardSlider

