import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { ThemeProvider } from '@mui/material/styles';

import Header from './Header';
import Footer from './Footer';
import theme from "../theme";


export default function MainLayout(props) {
    const { children } = props;

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: '100vh',
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