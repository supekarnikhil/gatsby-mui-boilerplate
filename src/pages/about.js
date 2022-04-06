import * as React from "react";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import ProTip from "../components/ProTip";
import Link from "../components/Link";

import RightSidebarLayout from "../layouts/page_layouts/RightSidebarLayout";

export default function About() {
  return (
    <RightSidebarLayout>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gatsby example
          </Typography>
          <Link to="/">Go to the main page</Link>
          <ProTip />
        </Box>
      </Container>
    </RightSidebarLayout>
  );
}
