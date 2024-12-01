import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import useWindowDimensions from "../hooks/useWindowDimensions";
import CustomCarousel from "../customCarousel/CustomCarousel";
import Header from "../header/Header";
import ScrollToTop from "../ScrollToTop";
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
import steel1 from "/Services/steel (1).png";
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
                marginBottom: "10px",
                paddingBottom: "5px",
              }}
            >
              <strong>MANDATE</strong>
            </Typography>
          </Grid>

          {/* Vision and Mission in Two Columns */}
          <Grid
            container
            item
            xs={12}
            md={width < 1800 ? 10 : 7}
            spacing={4}
            sx={{
              mt: "20px",
            }}
          >
            {/* Mission Section */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  align="left"
                  fontFamily="Poppins"
                  color="text.primary"
                  variant="h6"
                  sx={{ marginBottom: "10px" }}
                >
                  <strong>MISSION</strong>
                </Typography>
                <Typography
                  align="left"
                  fontFamily="Poppins"
                  color="text.secondary"
                  textAlign="justify"
                  variant="body1"
                  component="div"
                >
                  We are committed to providing the best possible services and
                  products to our customers, adhering strictly to quality and
                  safety controls to ensure optimal results. Our goal is to
                  maintain customer satisfaction with a safe environment. Our
                  experienced professionals in general contracting, interior
                  decoration, and fit-out work deliver superior quality both
                  on-site and in the workshop.
                </Typography>
              </Box>
            </Grid>
            {/* Vision Section */}
            <Grid item xs={12} md={6}>
              <Box>
                <Typography
                  align="left"
                  fontFamily="Poppins"
                  color="text.primary"
                  variant="h6"
                  sx={{ marginBottom: "10px" }}
                >
                  <strong>VISION</strong>
                </Typography>
                <Typography
                  align="left"
                  fontFamily="Poppins"
                  color="text.secondary"
                  textAlign="justify"
                  variant="body1"
                  component="div"
                >
                  To blend local expertise in civil and electro-mechanical
                  contracting with a dedicated team of qualified professionals,
                  establishing lasting relationships by exceeding customer
                  expectations and gaining trust through exceptional
                  performance.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          id="projects"
          container
          justifyContent="center"
          alignItems="center"
          mt={10}
          p={5}
        >
          <Grid item xs={12} md={10}>
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
              <strong>Our Projects</strong>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "50px", // Spacing between logos
              marginTop: 3,
              width: "20%",

              padding: "20px", // Optional: Padding to ensure the gradient is visible around the content
              borderRadius: "12px", // Optional: Rounded corners for the grid
            }}
          >
            {projects.map((logo, index) => (
              <Box
                key={index}
                component="img"
                src={logo.src}
                sx={{
                  maxWidth: isSmallScreen ? "40%" : "100%", // Max width for responsiveness
                  maxHeight: isSmallScreen ? "100%" : "250px",
                  // height: "auto", // Maintain aspect ratio
                  display: "block",
                  // backgroundColor: "rgba(255, 255, 255, 0.9)", // Subtle white background
                  // outline: "2px solid rgba(0, 0, 0, 0.1)", // Thin gray outline for visibility
                  borderRadius: "4px", // Optional: Slight rounding of edges
                  padding: "8px", // Space between image and background
                  margin: "10px", // Space between logos
                }}
                loading="lazy"
                onError={(e) => (e.target.src = "placeholder.png")}
              />
            ))}
          </Grid>
        </Grid>

        <Grid
          id="clients"
          container
          justifyContent="center"
          alignItems="center"
          mt={10}
          p={5}
        >
          <Grid item xs={12} md={10}>
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
              <strong>Our Clients</strong>
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "50px", // Spacing between logos
              marginTop: 3,
              width: "20%",

              padding: "20px", // Optional: Padding to ensure the gradient is visible around the content
              borderRadius: "12px", // Optional: Rounded corners for the grid
            }}
          >
            {[
              { src: Tim_Hortons_Logo, alt: "Tim_Hortons_Logo Logo" },
              { src: Diesel_logo, alt: "Diesel Logo" },
              { src: Formula1_Logo, alt: "Formula 1 Logo" },
              { src: Giordano_logo_PNG1, alt: "Giordano Logo" },
              { src: Jasmine, alt: "Jasmine Logo" },
              { src: Caramel_Bath_and_Body_Logo, alt: "Caramel Bath & Body" },
              { src: InHouse_logo, alt: "InHouse Logo" },
              { src: Soliman_fakeeh_logo, alt: "Soliman_fakeeh_logo Logo" },

              { src: logo, alt: "logo Logo" },
              { src: logo2, alt: "logo2 Logo" },
              { src: logo1713908957, alt: "logo1713908957 Logo" },
              { src: Magrabi_Logo, alt: "Magrabi_Logo Logo" },
              {
                src: tavola_logo_english_narrow_padding,
                alt: "tavola_logo_english_narrow_padding Logo",
              },

              { src: لوغو_1014x1024, alt: "لوغو_1014x1024 Logo" },
              { src: n6a8abu8h, alt: "Client Logo" },
              { src: Bonnon_Logo, alt: "Bonnon Logo" },
              {
                src: Applebees_logo,
                alt: "Applebee's Logo",
                bgcolor: "black",
              },
            ].map((logo, index) => (
              <Box
                key={index}
                component="img"
                src={logo.src}
                alt={logo.alt}
                sx={{
                  maxWidth: isSmallScreen ? "40%" : "15%", // Max width for responsiveness
                  height: "auto", // Maintain aspect ratio
                  display: "block",
                  // backgroundColor: "rgba(255, 255, 255, 0.9)", // Subtle white background
                  // outline: "2px solid rgba(0, 0, 0, 0.1)", // Thin gray outline for visibility
                  borderRadius: "4px", // Optional: Slight rounding of edges
                  padding: "8px", // Space between image and background
                  margin: "10px", // Space between logos
                }}
                loading="lazy"
                onError={(e) => (e.target.src = "placeholder.png")}
              />
            ))}
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
      {/* <About id="about" /> */}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default Home;
