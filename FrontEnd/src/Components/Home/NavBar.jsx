import { Box,Typography, useTheme } from '@mui/material'
import React from 'react'

import {navData } from "../../Constants/data"
export default function NavBar() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        margin: "10px 50px 0 50px",
        overflow:"hidden",
        justifyContent: "space-between",
        [theme.breakpoints.down("lg")]: {
          margin:"0px"
        },
      }}
    >
      {navData.map((el, id) => {
        return (
          <Box sx={{ padding: "12px 8px", textAlign: "center" }} key={id}>
            <img src={el.url} style={{ width: "64px" }} />
            <Typography
              sx={{
                fontSize: "14px",
                fontWeight: "600",
                color: "rgb(60,60,60)",
                fontFamily: "inherit",
              }}
            >
              {el.text}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
}
