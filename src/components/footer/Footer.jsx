import { Box, Grid, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import { makeStyles } from "@mui/styles";
import { Link as ScrollLink } from "react-scroll";
import { Mail } from "@mui/icons-material";
import AdvancedArchLogo from "/Logos/AdvanceArchLogo.png";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#372d21",
    color: "white",
    padding: theme.spacing(4),
    marginTop: theme.spacing(8),
    textAlign: "center",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  link: {
    color: "white",
    textDecoration: "none",
    "&:hover": {
      color: "#3aa8ff",
    },
  },
  icon: {
    color: "white",
    marginRight: theme.spacing(1),
    verticalAlign: "middle",
  },
  textContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(2), // Increased vertical spacing
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.footer}>
      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          alignContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid item xs={12} md={4}>
          <img
            height={"100px"}
            style={{
              paddingBottom: "10px",
            }}
            src={AdvancedArchLogo}
          />

          <Typography variant="h5">
            Advanced Architecture
            <br />
            Co. LTD.
          </Typography>
          <br />
          <Typography
            variant=""
            justifyContent={"center"}
            alignItems={"center"}
            ml={1}
            className={classes.description}
            style={{
              padding: "10px",
            }}
          >
            Civil, Electro-Mechanical, Furniture & Fixture.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={4}
          style={{ width: "50%", marginBottom: "30px", gap: "30px" }}
        >
          <Typography variant="h4" style={{ marginBottom: 3 }}>
            Contact Us
          </Typography>

          <Typography variant="">
            <LocationOnOutlinedIcon className={classes.icon} />
            Head Office: +966 56 430 69 55
            <Typography variant="body1">
              Office # 42, 4th Floor, Elite Business Center, Al-Rehab District,
              23345, Jeddah, Saudi Arabia
            </Typography>
          </Typography>
          <Typography
            variant="body1"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "5px",
            }}
          >
            <Mail />
            <Typography
              variant="body1"
              component="a"
              href="mailto:info@advancedarchsa.com"
              className={classes.icon}
            >
              info@advancedarchsa.com
            </Typography>
          </Typography>
          <Typography variant="body1">
            <PhoneIcon className={classes.icon} />
            +966 56 430 69 55
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" style={{ marginBottom: 3 }}>
            Main Menu
          </Typography>
          <Typography variant="body1">
            <ScrollLink
              to="identity"
              spy={true}
              smooth={true}
              offset={-100} // Adjust offset if needed
              duration={500}
              className={classes.link}
            >
              Who are we?
            </ScrollLink>
          </Typography>

          <Typography variant="body1">
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-100} // Adjust offset if needed
              duration={500}
              className={classes.link}
            >
              Services
            </ScrollLink>
          </Typography>
          <Typography variant="body1">
            <ScrollLink
              to="projects"
              spy={true}
              smooth={true}
              offset={-100} // Adjust offset if needed
              duration={500}
              className={classes.link}
            >
              Projects
            </ScrollLink>
          </Typography>
          <Typography variant="body1">
            <ScrollLink
              to="clients"
              spy={true}
              smooth={true}
              offset={-100} // Adjust offset if needed
              duration={500}
              className={classes.link}
            >
              Client
            </ScrollLink>
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" mt={4}>
        &copy; {new Date().getFullYear()} Advanced Architectures Co. LTD. All
        rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
