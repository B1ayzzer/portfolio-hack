import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { productsContext } from "../../contexts/ProductContext";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MemoryIcon from "@mui/icons-material/Memory";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import Paper from "@mui/material/Paper";
import "../../assets/css/Product.css";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import SwiperCore, { Thumbs } from "swiper";
import { Link } from "react-router-dom";
import { checkProductInCart } from "../../helpers/cartFunctions";

SwiperCore.use([Thumbs]);

const ProductDetails = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  let params = useParams().id;
  const { getCurProduct, currentProduct, handleDelete, addProductToCart } =
    useContext(productsContext);
  useEffect(() => {
    getCurProduct(params);
  }, []);

  const [deleteTask, setDeleteTask] = useState({});
  useEffect(() => {
    setDeleteTask(currentProduct.id);
  }, [currentProduct]);

  return (
    <section className="product__block-details">
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              className="mySwiper2"
            >
              {currentProduct.image ? (
                currentProduct.image.map((item, index) => (
                  <SwiperSlide key={index}>
                    <img src={item} alt={currentProduct.title} />
                  </SwiperSlide>
                ))
              ) : (
                <CircularProgress />
              )}
            </Swiper>
          </Grid>
          <Grid item xs={6}>
            <Typography
              variant="h6"
              gutterBottom
              component="h3"
              sx={{
                fontWeight: 300,
                letterSpacing: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              {currentProduct.descriptionSec}
            </Typography>
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "20px",
              }}
            >
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 500,
                  letterSpacing: 2,
                }}
              >
                {currentProduct.fullName}
              </Typography>
            </Box>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              sx={{ fontWeight: 700, letterSpacing: 2 }}
            >
              {currentProduct.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {currentProduct.description}
            </Typography>

            <br />
            <Link to="/">
              <Button
                className="delete"
                onClick={() => handleDelete(deleteTask)}
              >
                <DeleteOutlineIcon color="error" />
              </Button>
            </Link>
            
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ProductDetails;
