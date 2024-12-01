import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";
import CustomCarousel from "../customCarousel/CustomCarousel";
import Header from "../header/Header";
import ScrollToTop from "../ScrollToTop";
import About from "../about/About";
import Footer from "../footer/Footer";
import Chairman from "/Pictures/20240529_142440.jpg";

// Clients Logos
import Applebees_logo from "/Logos/Applebees_logo.png";
import Bonnon_Logo from "/Logos/Bonnon_Logo.png";
import Caramel_Bath_and_Body_Logo from "/Logos/Caramel Bath and Body_Logo.png";
import Diesel_logo from "/Logos/Diesel_logo.png";
import Formula1_Logo from "/Logos/Formula1_Logo.png";
import Giordano_logo_PNG1 from "/Logos/Giordano_logo_PNG1.png";
import InHouse_logo from "/Logos/InHouse_logo.jpg";
import Jasmine from "/Logos/Jasmine.png";
import Soliman_fakeeh_logo from "/Logos/Soliman fakeeh_logo.png";
import logo from "/Logos/logo.png";
import logo2 from "/Logos/2.png";
import logo1713908957 from "/Logos/logo1713908957.png";
import Magrabi_Logo from "/Logos/Magrabi Logo.png";
import tavola_logo_english_narrow_padding from "/Logos/tavola-logo-english-narrow-padding.png";
import Tim_Hortons_Logo from "/Logos/Tim-Hortons-Logo.png";
import لوغو_1014x1024 from "/Logos/لوغو-1014x1024.png";
import n6a8abu8h from "/Logos/n62a8abu8h.png";

// Services Icons
import enigneering from "/Services/engineering.png";
import interior_desing from "/Services/interior-design.png";
import mechanic from "/Services/mechanic.png";
import steel from "/Services/steel.png";
import steel1 from "/Services/steel1.png";
import woodworking from "/Services/woodworking.png";

// Project Pictures
import projects from "./project";

const Home = () => {
  const { width } = useWindowDimensions();
  const renderListItem = (icon, text, point_list) => (
    <Box display="flex" flexDirection="column" mt={2} mb={2}>
      <Box display="flex" alignItems="flex-start" gap="10px">
        <Box width={"35px"} height={"auto"}>
          {icon}
        </Box>
        <Typography
          fontFamily="Poppins"
          color="black"
          textAlign="justify"
          variant="h5"
        >
          {text}
        </Typography>
      </Box>
      {point_list && point_list.length > 0 && (
        <Box component="ul" ml={4} mt={1}>
          {point_list.map((point, index) => (
            <Box component="li" key={index} sx={{ fontFamily: "Poppins" }}>
              {point}
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  return (
    <>
      <Header home={true} />
      <CustomCarousel />

      <Box>
        <Grid
          id="home"
          container
          mt={width >= 1200 ? "50px" : 0}
          justifyContent={"space-around"}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              md: "column-reverse",
              lg: "row",
            },
          }}
          alignItems={"center"} //remove if you want to start the text from top of image
        >
          {width >= 1200 && <Grid item lg={1} xl={2} />}

          {/* {width < 1200 && width > 800 && <Grid xs={1}></Grid>} */}
          <Grid
            item
            id="identity"
            xs={width <= 800 ? 12 : 9}
            lg={5}
            xl={4}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              paddingLeft: "40px",
              paddingRight: "40px",
              marginTop: width < 1200 ? "50px" : "0px",
            }}
          >
            <Typography
              align="left"
              fontSize={30}
              mb={2}
              fontFamily="Poppins"
              color="black"
            >
              <strong>Who are we?</strong>
            </Typography>
            <Typography
              align="left"
              fontFamily="Poppins"
              // mb={2}
              color="text.secondary"
              textAlign="justify"
            >
              Advanced Architecture Co., Ltd. is a distinguished contracting
              firm specializing in comprehensive construction services and
              building maintenance. With a steadfast commitment to quality and
              craftsmanship, we uphold the highest standards in the Construction
              & Maintenance field. Our expertise lies in serving as a single
              point of contact and management for commercial and residential
              construction projects, providing everything from materials to
              labor and equipment.
              <br />
              <br />
              At Advanced Architecture Co., Ltd., we prioritize our
              clients&apos; aspirations, working closely with them to understand
              their unique visions. Through collaborative partnerships, we
              deliver tailored solutions that not only meet but exceed
              expectations. Our dedication to excellence permeates every project
              we undertake, ensuring exceptional outcomes that stand the test of
              time.
              <br />
              <br />
              Driven by a passion for transforming ideas into reality, we
              combine innovation with proven practices to achieve outstanding
              results. Whether it&apos;s new construction, renovations, or
              ongoing maintenance, our team of professionals is committed to
              delivering projects on time and within budget, while maintaining
              the highest standards of safety and sustainability.
              <br />
              <br />
              With a track record of success and a portfolio that speaks for
              itself, Advanced Architecture Co., Ltd. stands ready to partner
              with you on your next construction endeavor. Discover the
              difference in contracting excellence with us.
              <br />
            </Typography>
          </Grid>
          <Grid
            item
            pl={2}
            pr={2}
            xs={12}
            lg={5}
            xl={width < 1800 ? 4 : 3}
            height={"120%"}
            alignItems="center"
            style={{
              display: "flex",
              justifyContent: width < 1200 ? "center" : "center",
              marginTop: width < 1200 ? "3%" : "0",
            }}
          >
            <img
              src={Chairman}
              alt="Chairman"
              width={width < 1200 ? "650px" : "600px"}
              style={{
                borderRadius: "25px",
                // rotate: "-1deg",
                objectFit: "cover",
              }}
              height={width < 1200 ? "250px" : "800px"}
            />
          </Grid>
          {width < 1200 && width > 800 && <Grid xs={1}></Grid>}
          {width >= 1200 && <Grid item lg={1} xl={2}></Grid>}
        </Grid>

        <Grid
          id="services"
          container
          justifyContent="center"
          alignItems="center"
          mt="10px"
          p={5}
        >
          <Grid item xs={12} md={width < 1800 ? 10 : 7}>
            <Typography
              align="left"
              variant="h5"
              fontFamily="Poppins"
              display={"flex"}
              flexDirection={"row"}
              sx={{
                borderBottom: "1px solid rgb(101,77,52)",
                marginBottom: "5px",
                paddingBottom: "5px",
              }}
            >
              Our Services
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={width < 1800 ? 10 : 7}
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection={width < 786 ? "column" : "row"}
          >
            <Box display="flex" flexDirection="column" margin={5}>
              {renderListItem(
                <img
                  src={enigneering}
                  style={{ color: "#372d21", marginRight: "10px" }}
                />,
                "Civil Engineering",
                [
                  "Concrete Works",
                  "Block Masonry",
                  "Plastering",
                  "Gypsum Work",

                  "Tiling",

                  "Wall Paints",
                  "Gypsum and Metal Ceilings",
                ]
              )}
              {renderListItem(
                <img
                  src={steel1}
                  style={{ color: "#372d21", marginRight: "10px" }}
                />,
                "Metal Works",
                [
                  "Fabrication and Installation of Metal Stuctures and Components",
                ]
              )}
              {renderListItem(
                <img
                  src={interior_desing}
                  style={{ color: "#372d21", marginRight: "10px" }}
                />,
                "Interior Fit-out",
                [
                  "Complete Interior Decoration Services",
                  "Tailored fit-out Solutions For Commercial and Residential Spaces",
                ]
              )}
            </Box>
            <Box display="flex" flexDirection="column" margin={5}>
              {renderListItem(
                <img
                  src={woodworking}
                  style={{ color: "#372d21", marginRight: "10px" }}
                />,
                "Woodwork",
                [
                  "Custom Wood Finishes for Flooring, Wall Paneling, and Ceiling Panels",
                  "Elegant Furniture Manufacturing with Skilled Professional",
                  "Specialized in High-Quality Woodwork With State of the Art Workshop In Jeddah",
                ]
              )}

              {renderListItem(
                <img
                  src={mechanic}
                  style={{ color: "#372d21", marginRight: "10px" }}
                />,
                "Electro-mechanical Work",
                [
                  "Electrical Installations",
                  "Small Power Systems",
                  "Bus-bar Systems",
                  "Low Current Systems",
                  "Cable Installations for Server Rooms of Various Capacities",
                  "Complete Plumbing Services, including fire-fighting equipment installation",
                  "HVAC Installation (all system types)",
                ]
              )}

              {renderListItem(
                <img
                  src={steel}
                  style={{ color: "#372d21", marginRight: "10px" }}
                />,
                "Steel Structures",
                ["Design and Construction of Steel Frameworks"]
              )}
            </Box>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="center"
          alignItems="flex-start"
          mt="10px"
          p={5}
        >
          {/* Mandate Header */}
          <Grid item xs={12} md={width < 1800 ? 10 : 7}>
            <Typography
              align="left"
              variant="h5"
              fontFamily="Poppins"
              sx={{
                borderBottom: "1px solid rgb(101,77,52)",
                marginBottom: "5px",
                paddingBottom: "5px",
              }}
            >
              <strong>MANDATE</strong>
            </Typography>
          </Grid>
          <Grid item xs={12} md={width < 1800 ? 10 : 7}>
            <Typography
              align="left"
              mt="20px"
              mb="15px"
              fontFamily="Poppins"
              color="text.secondary"
              textAlign="justify"
            >
              <h3>VISION</h3>
              <ul>
                <li>
                  We aim to be worldwide competitive industry in providing
                  Innovative research based solutions and lead the market
                  through continious resesrch innovation and best
                  commercialization of seed, Pesticide and Micronutrient with
                  stewardship.
                </li>
              </ul>
              <h3>MISSION</h3>
              <ul>
                <li>
                  To provide excellent quality and high productivity through
                  advanced technology under the operations highly productivity
                  through advanced technology under the operations of highly
                  trained personnel. In our pursuit to meet our vision, the
                  group has embarked on market penetration and diversification
                  strategy maintaining excellence in the wake of increasing
                  regional and intense global competition.
                </li>
              </ul>
            </Typography>
          </Grid>
        </Grid>
        <Box
          role="presentation"
          sx={{
            display: "block",
            position: "fixed",
            bottom: 32,
            left: 22,
            zIndex: 1,
            transition: "transform 0.3s ease-in-out",
            transform: "scale(1)",
            "&:hover": {
              transform: "scale(1.1)",
            },
          }}
        ></Box>
      </Box>
      <About id="about" />
      <Products id="products" />
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
