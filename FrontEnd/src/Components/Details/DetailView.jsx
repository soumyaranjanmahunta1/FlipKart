import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import { getProductdetails } from "../Redux/Action/productAction";
import { Box, Typography, styled, Grid } from "@mui/material";
import ActionItem from "./ActionItem";

const Container = styled(Grid)`
  background: #ffffff;
  display: flex;
`;

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;

const RightContainer = styled(Grid)`
  margin-top: 50px;
`;
export default function DetailView() {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const { loading, product } = useSelector((state) => state.getProductDetails);

  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductdetails(id));
  }, [dispatch, id, loading, product]);
  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product} />
          </Grid>
          <RightContainer item lg={8} md={8} sm={8} xs={12}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              style={{ marginTop: 5, color: "#878787", fontSize: 14 }}
            >
              8 Ratings & 1 Reviews
              <span>
                <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
              </span>
            </Typography>
            <Typography>
              <span style={{ fontSize: 28 }}>₹{product.price.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span
                style={{ color: "#878787", textDecoration: "line-through" }}
              >
                ₹{product.price.mrp}
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            {/* <ProductDetail product={product} /> */}
          </RightContainer>
        </Container>
      )}
    </Component>
  );
}
