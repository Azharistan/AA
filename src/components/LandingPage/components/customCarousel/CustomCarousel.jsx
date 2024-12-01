import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { useState } from "react";

import AdvancedArch from "/Logos/AdvanceArchLogo.png";
import BANNER_1 from "/Pictures/WhatsApp Image 2024-06-30 at 17.43.25 (3).jpg";
import BANNER_2 from "/Pictures/WhatsApp Image 2024-06-30 at 18.42.43 (3).jpg";
import BANNER_3 from "/Pictures/WhatsApp Image 2024-06-30 at 18.42.46.jpg";
import BANNER_4 from "/Pictures/WhatsApp Image 2024-06-30 at 18.42.49.jpg";
import BANNER_5 from "/Pictures/WhatsApp Image 2024-06-30 at 18.55.14 (1).jpg";
import BANNER_6 from "/Pictures/WhatsApp Image 2024-06-30 at 18.55.14 (2).jpg";
// import BANNER_11 from '../../public/slider/(1).jpeg';

import { Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    position: "relative",
    marginTop: "0px !important",
  },
  image: {
    height: "800px",
    "@media (max-width: 1800px)": {
      height: "750px",
    },
    objectFit: "cover",
  },

  animatedImages: {
    animation: "$kenburns 60s ease infinite",
    animationIterationCount: "infinite",
    WebkitAnimationDelay: "0s",
    animationDelay: "0s",
  },
  "@keyframes kenburns": {
    "0%": {
      WebkitTransform: "scale(1)",
      transform: "scale(1)",
    },
    "50%": {
      WebkitTransform: "scale(1.5)",
      transform: "scale(1.5)",
    },
    "51%": {
      WebkitTransform: "scale(1.5)",
      transform: "scale(1.5)",
    },
    to: {
      WebkitTransform: "scale(0)",
      transform: "scale(0)",
    },
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    backgroundImage:
      "linear-gradient(to bottom, rgb(75 75 68 / 38%), rgb(35 19 2));",
  },
  iconContainer: {
    position: "absolute",
    height: "100%",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    marginLeft: "55px",
    color: "white",

    "@media (max-width: 1199.5px)": {
      display: "none",
    },
  },
  titleContainer: {
    position: "absolute",
    height: "100%",
    top: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    marginLeft: "9%",
    color: "black",
    width: "54%",
    "@media (max-width: 1280px)": {
      width: "70%",
    },
    "@media (max-width: 600px)": {
      top: "2%",
      width: "85%",
    },
  },
  title: {
    fontSize: "40px",
    lineHeight: "50px",
    "@media (max-width: 1200px)": {
      fontSize: "40px",
      lineHeight: "52px",
    },
    "@media (max-width: 767px)": {
      fontSize: "28px",
      lineHeight: "35px",
      marginTop: "15px",
    },
  },
  description: {
    // fontSize: '14px',
    color: "white",
    // lineHeight: '31px',
  },
  button: {
    background: "#fff!important",
    border: "2px solid #eef3f5!important",
    borderRadius: "20px 0!important",
    color: "#101010!important",
    fontSize: "12px!important",
    fontWeight: "400!important",
    lineHeight: "18px!important",
    padding: "14px 42px!important",
    textDecoration: "none",
    textTransform: "uppercase",
    "@media (max-width: 1200px)": {
      padding: "12px 20px!important",
    },
    "@media (max-width: 960px)": {
      padding: "12px 18px!important",
    },
  },
}));
export default function CustomCarousel() {
  const classes = useStyles();
  const [selectedSlide, setSelectedSlide] = useState(0);
  const handleSlideChange = (index) => {
    setSelectedSlide(index);
  };
  return (
    <>
      <Box className={classes.root}>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          stopOnHover={false}
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          className={classes.carousel}
          interval={4000}
          onChange={handleSlideChange}
        >
          <div>
            <img
              alt=""
              src={BANNER_1}
              className={`${classes.image} ${
                selectedSlide === 0 ? classes.animatedImages : ""
              }`}
            />
          </div>
          <div>
            <img
              alt=""
              src={BANNER_2}
              className={`${classes.image} ${
                selectedSlide === 1 ? classes.animatedImages : ""
              }`}
            />
          </div>
          <div>
            <img
              alt=""
              src={BANNER_3}
              className={`${classes.image} ${
                selectedSlide === 2 ? classes.animatedImages : ""
              }`}
            />
          </div>
          <div>
            <img
              alt=""
              src={BANNER_4}
              className={`${classes.image} ${
                selectedSlide === 3 ? classes.animatedImages : ""
              }`}
            />
          </div>
          <div>
            <img
              alt=""
              src={BANNER_5}
              className={`${classes.image} ${
                selectedSlide === 4 ? classes.animatedImages : ""
              }`}
            />
          </div>
          <div>
            <img
              alt=""
              src={BANNER_6}
              className={`${classes.image} ${
                selectedSlide === 5 ? classes.animatedImages : ""
              }`}
            />
          </div>
        </Carousel>
        <Box className={classes.overlay}></Box>

        <Box className={classes.titleContainer}>
          <span
            style={{
              display: "flex",
              alignItems: "center", // Aligns items vertically in the center
              gap: "10px", // Adds space between the image and heading
            }}
          >
            <img
              height={"200px"}
              src={AdvancedArch}
              alt="Advance Architecture Logo"
            />
            <h1
              style={{
                color: "white",
                margin: 0, // Removes default margin around <h1>
                fontSize: "50px",
                alignContent: "center",
              }}
            >
              Advance
              <br /> Architect Co.
            </h1>
          </span>
          <Typography variant="h7" ml={20} className={classes.description}>
            Civil, Electro Mechanical, Interior Decoration & Fitout, Furniture &
            Fixtures
          </Typography>
        </Box>
      </Box>
    </>
  );
}
