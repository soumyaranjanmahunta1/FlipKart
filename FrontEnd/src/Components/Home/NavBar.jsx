import { Box,Typography } from '@mui/material'
import React from 'react'
import {navData } from "../../Constants/data"
export default function NavBar() {
  return (
      <Box sx={{display:"flex",margin:"55px 50px 0 50px",justifyContent:"space-between"}}>
          {
              navData.map((el) => {
                  return (
                    <Box sx={{ padding: "12px 8px",textAlign:"center" }}>
                      <img src={el.url} style={{ width: "64px" }} />
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "600",
                                  color: "rgb(60,60,60)",
                          fontFamily:"inherit"
                        }}
                      >
                        {el.text}
                      </Typography>
                    </Box>
                  );
                  
              })
          }
    </Box>
  )
}
