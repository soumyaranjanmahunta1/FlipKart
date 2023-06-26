import { Box } from "@mui/material";
import React from "react";
import Slid from "./Slid";
import { useTheme } from "@mui/material/styles";
export default function MidSlide({ Products, title, timer }) {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          width: "83%",
          [theme.breakpoints.down("md")]: {
            width: "100%",
          },
        }}
      >
        <Slid Products={Products} title="Deal of the Day" timer={true} />
      </Box>
      <Box
        sx={{
          backgroundColor: "#ffffff",
          padding: "5px",
          marginTop: "10px",
          marginLeft: "10px",
          width: "17%",
          textAlign: "center",
          [theme.breakpoints.down("md")]: {
            display: "none",
          },
        }}
      >
        <img
          src="https://rukminim1.flixcart.com/fk-p-flap/464/708/image/d707983df0e6f3ab.jpg?q=70"
          alt="add"
          style={{ width: "217px" }}
        />
      </Box>
    </Box>
  );
}
