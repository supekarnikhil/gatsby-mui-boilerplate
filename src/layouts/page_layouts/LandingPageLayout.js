import React from "react";
import PropTypes from "prop-types";

import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import { ThemeProvider } from "@mui/material/styles";

import Header from "../sections/Header";
import Footer from "../sections/Footer";
import theme from "../../theme";

export default function LPGLayout(props) {
  const { children } = props;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Header />
        {children}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

LPGLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
