import React, { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import { Box, fabClasses } from "@mui/material";
import { getProducts } from "../Redux/Action/productAction";
import { useDispatch, useSelector } from "react-redux";
import Slid from "./Slid";
import MidSlide from "./MidSlide";
import MiddSec from "./MiddSec";
export default function Home() {
  const dispatch = useDispatch();
  const Products = useSelector((state) => state.getProducts);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    < div style={{overflow:"hidden"}}>
      <NavBar />
      <Box sx={{ padding: "10px 10px", background: "#F1F3F6" }}>
        <Banner />
        <MidSlide Products={Products} title="Deal of the Day" timer={true} />
        <MiddSec />
        <Slid Products={Products} title="Discount for You" timer={false} />
        <Slid Products={Products} title="Top selection" timer={false} />
        <Slid Products={Products} title="Suggesting Items" timer={false} />
        <Slid Products={Products} title="Top Selection" timer={false} />
        <Slid Products={Products} title="Trending offers" timer={false} />
        <Slid Products={Products} title="Recommended Items" timer={false} />
        <Slid Products={Products} title="Season's top picks" timer={false} />
        <Slid
          Products={Products}
          title="Top Deal on Accessories"
          timer={false}
        />
      </Box>
    </div>
  );
}
