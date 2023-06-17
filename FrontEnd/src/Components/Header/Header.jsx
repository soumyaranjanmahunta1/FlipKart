import React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import Search from "./Search";

export default function Header() {
  const logoUrl =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const sublogoUrl =
    "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

  return (
    <AppBar
      sx={{
        height: "56px",
        background: "#2874F0",
        boxShadow: "none",
      }}
    >
      <Toolbar>
        <Box
          sx={{
            marginLeft: "12%",
            lineHeight: "0",
          }}
        >
          <img src={logoUrl} alt="logo" style={{ width: 75, height: 20 }} />
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ fontSize: "10px", fontStyle: "italic" }}>
              Explore{" "}
              <span style={{ color: "#E4D61E", fontWeight: "800" }}>Plus</span>
            </Typography>
            <img
              src={sublogoUrl}
              alt="sublogo"
              style={{
                width: "10px",
                height: "10px",
                marginLeft: "1px",
                marginTop: "2px",
              }}
            />
          </Box>
              </Box>
              <Search/>
      </Toolbar>
    </AppBar>
  );
}
