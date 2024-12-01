import { Box, Grid, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import { makeStyles } from "@mui/styles";
import { Link as ScrollLink } from "react-scroll";
import { Facebook, Mail, YouTube } from "@mui/icons-material";
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
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <img
            height={"100px"}
            style={{
              paddingBottom: "10px",
            }}
            src={agri}
          />

          {/* <Typography variant="h3">Four Brothers</Typography> */}
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
            Research, Innovation, Commercialization.
          </Typography>
          {/* <Typography variant="body1">Research, Innovation, Commercialization.</Typography> */}
          <Box mt={2}>
            <div className={classes.textContainer}>
              <a
                href="https://www.linkedin.com/company/fourbrothersgroup/"
                target="_blank"
              >
                <LinkedInIcon className={classes.icon} />
              </a>
              <a href="https://www.facebook.com/TarzanMarkaz" target="_blank">
                <Facebook className={classes.icon} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCEBibaeSkEMlgzKf10vwcHg"
                target="_blank"
              >
                <YouTube className={classes.icon} />
              </a>
            </div>
          </Box>
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
            Head Office:
            <Typography variant="body1">
              77-D/1, First Floor Lahore Center, Main Boulevard Gulberg, Lahore,
              Pakistan.
            </Typography>
          </Typography>
          <Typography variant="body1">
            <Typography
              variant="body1"
              component="a"
              // href="mailto:info@fourbrothers.com.pk"
              // className={classes.icon}
            >
              <img
                src={telephone}
                width={"25px"}
                style={{
                  marginRight: "10px",
                }}
              />
              Toll Free 0800-33-222
            </Typography>
          </Typography>
          <Typography variant="body1">
            <PhoneIcon className={classes.icon} />
            +92-42-111-00-55-55
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Typography variant="h4" style={{ marginBottom: 3 }}>
            Main Menu
          </Typography>
          <Typography variant="body1">
            <ScrollLink
              to="about"
              spy={true}
              smooth={true}
              offset={-100} // Adjust offset if needed
              duration={500}
              className={classes.link}
            >
              About Us
            </ScrollLink>
          </Typography>
          {/* <Typography variant="body1">
            <Typography variant="body1" component="a" href="/contactus" className={classes.link}>
              Contact Us
            </Typography>
          </Typography> */}
          <Typography variant="body1">
            <ScrollLink
              to="products"
              spy={true}
              smooth={true}
              offset={-100} // Adjust offset if needed
              duration={500}
              className={classes.link}
            >
              Products
            </ScrollLink>
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body2" align="center" mt={4}>
        &copy; {new Date().getFullYear()} FourBrothers. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
