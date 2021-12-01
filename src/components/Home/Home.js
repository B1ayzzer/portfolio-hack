import { Grid } from "@mui/material";
import React from "react";
import Content from "./Content";
import "../../assets/css/Home.css";

import MainCarousel from "../Carousel/Carousel";


const Home = () => {
  return (
    <div>
      <MainCarousel />
      <Grid container spacing={3}>
        <Content />
      </Grid>
    </div>
  );
};

export default Home;
