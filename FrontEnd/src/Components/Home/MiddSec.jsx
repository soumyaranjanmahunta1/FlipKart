

import React from 'react'
import { Box, Grid } from '@mui/material'
import { imageURL } from '../../Constants/data'
import { useTheme } from "@mui/material/styles";
export default function MiddSec() {
    const theme = useTheme();
    const url="https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50"
    return (
      <>
        <Grid
          lg={12}
          sm={12}
          md={12}
          xs={12}
          container
          sx={{
            marginTop: "10px",
            justifyContent: "space-between",
          }}
        >
          {imageURL.map((el, id) => {
            return (
              <Grid lg={4} sm={12} md={4} xs={12} item>
                <img src={el} alt="midSec" key={id} style={{ width: "100%" }} />
              </Grid>
            );
          })}
        </Grid>
          <img
            id="covidimg"
            src={url}
            alt=""
            style={{
              width: "100%",
              //   [theme.breakpoints.down("md")]: {
              //     height: "120px",
              //     objectFit: "cover",
              //   },
            }}
          />
      </>
    );
}
