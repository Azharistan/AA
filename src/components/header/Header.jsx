/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  CssBaseline,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import colorLogo from "/Logos/AdvanceArchLogo.png";
import useScrollPosition from "../hooks/useScrollPosition";

const navItems = [{ id: 5, title: "Advanced Architecture", link: "#" }];

const Header = (props) => {
  const { scrollY } = useScrollPosition();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const renderLogo = () => {
    const logoSrc = colorLogo;
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
        <Toolbar
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            padding: "0 20px",
          }}
        >
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
              <Button
                key={item.id}
                sx={{
                  color:
                    props.home === true && scrollY === 0 ? "white" : "black",
                  padding: { lg: "10px", xl: "15px" },
                }}
              >
                <strong>{item.title.toUpperCase()}</strong>
              </Button>
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
            <Typography variant="h6" sx={{ my: 2 }}>
              {renderLogo()}
            </Typography>
            <Divider />
            <List>
              {navItems.map((item) => (
                <ListItem key={item.id}>
                  <ListItemButton sx={{ textAlign: "center" }}>
                    {/* {item.title} */}
                    <ListItemText
                      primary={
                        <span style={{ fontWeight: "bold", color: "#372d21" }}>
                          {item.title.toUpperCase()}
                        </span>
                      }
                    />
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
