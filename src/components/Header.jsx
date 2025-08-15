import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Button,
  Container,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link as RouterLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { blue } from "@mui/material/colors";

const buttonStyles = {
  color: "inherit",
  ":hover": { backgroundColor: "#808080", fontWeight: "bold" },
  textTransform: "none",
  width: "80px",
  color: "black",
  fontSize: "1.0rem",
  //fontWeight: "bold",
};

export default function Header() {
  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={1}
      sx={{ backgroundColor: "lightgray", borderBottom: "1px solid #eee" }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ gap: 2 }}>
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: "flex",
              alignItems: "center",
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <img
              src={logo}
              alt="XPAT Berlin"
              style={{
                height: 100,
                position: "absolute",
                backgroundColor: "black",
                top: 10,
                padding: 10,
              }}
            />
          </Box>
          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", md: "flex" }, gap: 1, color: "white" }}
          >
            <Button
              component={RouterLink}
              to="/"
              color="inherit"
              sx={buttonStyles}
            >
              Home
            </Button>
            <Button
              component={RouterLink}
              to="/category/news"
              color="inherit"
              sx={buttonStyles}
            >
              Services
            </Button>
            <Button
              component={RouterLink}
              to="/category/guides"
              color="inherit"
              sx={buttonStyles}
            >
              About
            </Button>
            <Button
              component={RouterLink}
              to="/category/life"
              color="inherit"
              sx={buttonStyles}
            >
              Reviews
            </Button>
            <Button
              component={RouterLink}
              to="/category/events"
              color="inherit"
              sx={buttonStyles}
            >
              FAQs
            </Button>
            <Button
              component={RouterLink}
              to="/category/events"
              color="inherit"
              sx={buttonStyles}
            >
              Why Us
            </Button>
            <Button
              component={RouterLink}
              to="/category/events"
              color="inherit"
              sx={buttonStyles}
            >
              Contact
            </Button>
          </Box>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
