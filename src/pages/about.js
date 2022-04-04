import * as React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ProTip from '../components/ProTip';
import Link from '../components/Link';

import SidebarLayout from '../layouts/SidebarLayout';

export default function About() {
  return (
    <SidebarLayout>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gatsby example
          </Typography>
          <Link to="/">Go to the main page</Link>
          <ProTip />
        </Box>
      </Container>
    </SidebarLayout>
  );
}
