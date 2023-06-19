import React from 'react'
import NavBar from './NavBar'
import Banner from './Banner';
import { Box } from '@mui/material';
export default function Home() {
    return (
      <>
        <NavBar />
        <Box sx={{ padding: "10px 10px", background: "#F1F3F6" }}>
          <Banner />
        </Box>
      </>
    );
}
