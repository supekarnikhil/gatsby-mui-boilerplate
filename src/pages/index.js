import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProTip from "../components/ProTip";
import Link from "../components/Link";

import LandingPageLayout from "../layouts/page_layouts/LandingPageLayout";

export default function Index() {
  return (
    <LandingPageLayout>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gatsby example
          </Typography>
          <Link to="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
        </Box>
      </Container>
    </LandingPageLayout>
  );
}
