/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import colorLogo from "/Logos/AdvanceArchLogo.png";
import whiteLogo from "/Logos/AdvanceArchLogo.png";
import useScrollPosition from "../hooks/useScrollPosition";

const navItems = [{ id: 5, title: "login", link: "/login/" }];

const Header = (props) => {
  const { scrollY } = useScrollPosition();
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  // const navigate = Navigate()

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const renderLogo = (scrollY) => {
    const logoSrc = scrollY === 0 && props.home ? whiteLogo : colorLogo;
    return (
      <img
        src={logoSrc}
        alt="FourBrothers"
        style={{ width: "auto", height: "80px", margin: "20px" }}
      />
    );
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        position="fixed"
        sx={{
          height: "100px",
          display: "flex",
          justifyContent: "center",
          bgcolor: props.home && scrollY === 0 ? "transparent" : "white",
          boxShadow: "none",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open Drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              color:
                props.home === true
                  ? scrollY === 0
                    ? "white"
                    : "black"
                  : "black",
              display: { lg: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              mr: 2,
              color:
                props.home === true
                  ? scrollY === 0
                    ? "white"
                    : "black"
                  : "black",
              display: { lg: "none" },
            }}
          >
            {renderLogo(scrollY)}
          </Box>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "none", md: "none", lg: "block" },
              cursor: "pointer",
            }}
          >
            {renderLogo(scrollY)}
          </Typography>
          <Box sx={{ display: { xs: "none", lg: "block" } }}>
            {navItems.map((item) => (
              <Link key={item.id} to={`${item.link.toLowerCase()}`}>
                <Button
                  sx={{
                    color:
                      props.home === true && scrollY === 0 ? "white" : "black",
                    padding: { lg: "10px", xl: "15px" },
                  }}
                >
                  <strong>{item.title.toUpperCase()}</strong>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", lg: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: 300,
            },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography
              onClick={() => navigate("/")}
              variant="h6"
              sx={{ my: 2 }}
            >
              {renderLogo()}
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item.id}>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    <Link
                      to={`${item.link.toLowerCase()}`}
                      style={{ textDecoration: "none" }}
                    >
                      {/* {item.title} */}
                      <ListItemText
                        primary={
                          <span
                            style={{ fontWeight: "bold", color: "#372d21" }}
                          >
                            {item.title.toUpperCase()}
                          </span>
                        }
                      />
                    </Link>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
