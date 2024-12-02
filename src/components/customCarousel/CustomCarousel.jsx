import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { makeStyles } from "@mui/styles";
import { Box } from "@mui/material";
import { useState } from "react";

import AdvancedArch from "/Logos/AdvanceArchLogo.png";
import bannerImages from "./BannerImages";
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
          {bannerImages.map((banner, index) => (
            <div key={index}>
              <img
                alt=""
                src={banner}
                className={`${classes.image} ${
                  selectedSlide === index ? classes.animatedImages : ""
                }`}
              />
            </div>
          ))}
        </Carousel>
        <Box className={classes.overlay}></Box>

        <Box
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: "0 5%",
          }}
        >
          <img
            src={AdvancedArch}
            alt="Advance Architecture Logo"
            style={{
              height: "100px",
              maxWidth: "100%",
              objectFit: "contain",
            }}
          />
          <Typography variant="h3" component="h1" color="white">
            Advanced Architecture Co. Ltd.
          </Typography>
          <Typography
            color="white"
            style={{
              // marginTop: theme.spacing(2),
              fontSize: "1rem",
              lineHeight: "1.5",
              // [theme.breakpoints.down("md")]: {
              //   fontSize: "0.9rem",
              // },
              // [theme.breakpoints.down("sm")]: {
              //   fontSize: "0.8rem",
              // },
            }}
          >
            Civil, Electro Mechanical, Interior Decoration & Fitout, Furniture &
            Fixtures
          </Typography>
        </Box>
      </Box>
    </>
  );
}
