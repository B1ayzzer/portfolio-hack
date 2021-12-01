import React from "react";
import ProductsList from "../Products/ProductList";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Grid, Paper } from "@mui/material";


const Content = () => {
  return (
    <Grid item md={12}>
      <Paper>
        <section className="product__block">
          <Container>
            <Typography variant="h2" gutterBottom component="div" align="center">
            Портфолио 
            </Typography>
            <ProductsList />
          </Container>
        </section>
      </Paper>
    </Grid>
  );
};

export default Content;
