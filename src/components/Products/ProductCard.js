import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Button from "@mui/material/Button";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { productsContext } from "../../contexts/ProductContext";
import { checkProductInCart } from "../../helpers/cartFunctions";
import { red } from '@mui/material/colors';


import "../../assets/css/Product.css";

const ProductCard = ({ item }) => {
  const { addProductToCart, currentProduct } = useContext(productsContext);

  const { getData } = useContext(productsContext);
  function handleAdd() {
    getData(item, item.id);
  }

  const color = red[900]
  return (
    <Grid item xs={3}>
      <Card>
        <Link to={`/product/${item.id}`}>
          
        <CardMedia
          component="img"
          height="auto"
          image={item.image[0]}
          alt={item.title}
          />
        <CardContent>
          <Typography variant="body1" color="text.secondary" align="center">
            {item.descriptionSec}
          </Typography>
        </CardContent>
          </Link>
        <CardActions disableSpacing sx={{ justifyContent: "space-around" }}>
          <FavoriteIcon
            aria-label="share"
            onClick={() => addProductToCart(item)}
            color={checkProductInCart(item.id) ? "error" : "black"}
          >
            <AddShoppingCartIcon />
          </FavoriteIcon>
          <Link to={`edit/${item.id}`} >
            <Button onClick={handleAdd} ><img src="https://www.freeiconspng.com/uploads/edit-icon-orange-pencil-0.png"  width= '25px' /></Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
