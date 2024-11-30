import ImgOverlay from "../imageOverlay/ImageOverlay";
import AboutImage from "../../public/about/Sky_Closeup_Ear_botany_501921_3840x2400.webp";
import { Box, Grid, Typography } from "@mui/material";
import Card from "../customCards/CustomCards";
import useWindowDimensions from "../hooks/useWindowDimensions";
import History from "../../public/about/History.webp";
const About = () => {
  const { width } = useWindowDimensions();

  return (
    <div id="about">
      <ImgOverlay
        image={AboutImage}
        height={"300px"}
        titlePartOne="About"
        titlePartTwo="Us"
      />
      <Box id="">
        <Grid container mt="50px" alignItems={"center"}>
          {width >= 1500 ? <Grid lg={1} xl={2}></Grid> : null}
          <Grid
            item
            xs={12}
            lg={6}
            xl={width < 1800 ? 4 : 3}
            alignItems="flex-end"
            boarder="1 solid black"
            style={{
              // marginLeft: '-40px',
              display: "flex",
              justifyContent: width < 1200 ? "center" : "end",
            }}
          >
            <Card
              mainCardImage={History}
              mainCardImageHeight={width < 1200 ? "250px" : "600px"}
              mainCardMaxWidth={"1000px"}
              mainCardBoxShadow={"none"}
              mainCardHeight={width < 1200 ? "250px" : "600px"}
              mainCardMaxHeight={"600px"}
              mainCardBorderRadius={"15px"}
              mainCardWriteOnImage={null}
              basicCard={false}
            />
          </Grid>
          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
          <Grid
            item
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
              fontFamily="Poppins"
              color="rgb(101,77,52)"
            ></Typography>
            <Typography
              variant="h3"
              align="left"
              fontSize={30}
              mb={3}
              fontFamily="Poppins"
              color="black"
            >
              OUR HISTORY
            </Typography>
            <Typography
              align="left"
              fontFamily="Poppins"
              mb={3}
              line-height="10px"
              wordSpacing="15px"
              color="text.secondary"
              textAlign={"justify"}
            >
              The group initiated formation of its activities with the vast
              exposure of its management team with a humble beginning by setting
              up Four Brothers Industries in July, 2002. To complement its
              existing distribution business that started in the late 70&apos;s.
              The Group activities gained momentum with the acquisition of
              Faletti&apos;s Hotel property from the Privatization Commission,
              Government of Pakistan in July, 2005. <br />
              <br />
              One of the Group&apos;s major strength lies in its strong
              relationship with Chinese and European manufacturers, while
              ensuring sourcing for the open ended customer requirements. Our
              success lies in believing in synergy and its limitless power of
              unifying. Our philosophy extends to the realms of customer
              relations, investor interactions, market trends, analysis and
              technological advances.
              <br />
              <br />
              There was also a prestigious joint venture of the group with the
              Defense Housing Authority, Islamabad in collaboration with
              internationally acclaimed Telecom Company Teleste, to organize and
              contrast a high profiled broadband cable facility. Four Brothers
              Group introduced Mobile Handsets with the brand name of Trend
              Mobiles. It was Pakistan&apos;s First Dual Sim Mobile handset.
              Trend Mobiles also launched CDMA Handsets, IT related products and
              LCDs.
            </Typography>
          </Grid>
          {width < 1200 && width > 800 ? <Grid xs={1}></Grid> : null}
          {width >= 1200 ? <Grid lg={1} xl={2}></Grid> : null}
        </Grid>
      </Box>
    </div>
  );
};

export default About;
