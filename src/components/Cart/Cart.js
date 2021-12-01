import React, { useContext, useEffect } from "react";
import { productsContext } from "../../contexts/ProductContext";
import { CircularProgress } from "@mui/material";
import { changeProductCount } from "../../contexts/ProductContext";
import "../../assets/css/Cart.css";
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
import { checkProductInCart } from "../../helpers/cartFunctions";
import { red } from '@mui/material/colors';

const Cart = () => {
  const { getCart, cart, changeProductCount } = useContext(productsContext);

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className="cart">
      {cart.products ? (



          <Grid item xs={3}>
          {cart.products.map((elem) => (
      <Card>
        <Link to={`/product/${elem.item.id}`}>
          
        <CardMedia
          component="img"
          height="auto"
          image={elem.item.image[0]}
          alt={elem.item.title}
          />
        <CardContent>
          <Typography variant="body1" color="text.secondary" align="center">
            {elem.item.descriptionSec}
          </Typography>
        </CardContent>
          </Link>
        <CardActions disableSpacing sx={{ justifyContent: "space-around" }}>
        </CardActions>
      </Card>
      ))}
    </Grid>

      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default Cart;
