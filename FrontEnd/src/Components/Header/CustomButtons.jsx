import { Box, Button, Typography } from "@mui/material";
import { useContext, useState } from "react";
import React from "react";
import Profile from "./Profile";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginDialog from "../Login/LoginDialog";
import { DataContext } from "../../Context/DataProvider";
export default function CustomButtons() {
  const {account,setAccount} = useContext(DataContext);
  const [open, setOpen] = useState(false);
  const openDialog = () => {
    setOpen(true);
  }
  return (
    <Box sx={{ display: "flex", margin: "0 3% 0 auto", alignItems: "center" }}>
      {account ? (
        <Profile account={account} setAccount={setAccount} />
      ) : (
        <Button
          variant="contained"
          sx={{
            marginRight: "40px",
            color: "#2874F0",
            background: "#FFF",
            fontWeight: "600",
            borderRadius: "1px",
            textTransform: "none",
            padding: "4px 40px",
            height: "30px",
            boxShadow: "none",
          }}
          onClick={openDialog}
        >
          Login
        </Button>
      )}
      <Typography
        sx={{
          marginRight: "40px",
          marginTop: "3px",
          width: "155px",
          fontWeight: "550",
          fontSize: "14px",
        }}
      >
        Become a Seller
      </Typography>
      <Typography
        sx={{
          marginRight: "40px",
          marginTop: "3px",
          marginTop: "3px",
          fontWeight: "550",
          fontSize: "14px",
        }}
      >
        More
      </Typography>
      <Box sx={{ display: "flex", marginRight: "40px", alignItems: "center" }}>
        <ShoppingCartIcon />
        <Typography
          sx={{ fontWeight: "550", fontSize: "14px", marginLeft: "3px" }}
        >
          Cart
        </Typography>
      </Box>
      <LoginDialog open={open} setOpen={setOpen} />
    </Box>
  );
}
