import { Box, Button,styled } from '@mui/material'
import React from 'react'
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
      padding: "20px 40px",
  },
}));

const StyledButton = styled(Button)`
  width: 48%;
  border-radius: 2px;
  height: 50px;
  color: #fff;
`;
const Image = styled("img")({
  padding:"15px",
});
export default function ActionItem({product}) {
  return (
    <LeftContainer>
      <Box
        style={{ padding: "15px 20px", border: "1px solid #f0f0f0", width: "90%" }}
      >
        <Image src={product.detailUrl} /> <br />
      </Box>
      <StyledButton
        // onClick={() => addItemToCart()}
        style={{ marginRight: 10, background: "#ff9f00" }}
        variant="contained"
      >
        <Cart />
        Add to Cart
      </StyledButton>
      <StyledButton
        // onClick={() => buyNow()}
        style={{ background: "#fb641b" }}
        variant="contained"
      >
        <Flash /> Buy Now
      </StyledButton>
    </LeftContainer>
  );
}
