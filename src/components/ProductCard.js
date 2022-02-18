import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Card, CardMedia, Typography } from "@mui/material";

export default function ProductCard({ product, index }) {
  let {
    activeProduct,
    activeProductDetails,
    activeProductPhoto,
    setOrToggleActiveProduct,
  } = useContext(AppContext);
  let isActiveProduct = activeProduct === index;

  return (
    <Card
      className="product-card"
      onClick={(e) => {
        setOrToggleActiveProduct(index);
      }}
    >
      <Typography>{product.name}</Typography>
      <Typography>{product.slogan}</Typography>
      {isActiveProduct ? (
        <>
          <CardMedia
            component="img"
            // height="200"
            image={activeProductPhoto}
            alt={product.name}
          />
          <Typography>{activeProductDetails.description}</Typography>
        </>
      ) : (
        <></>
      )}
    </Card>
  );
}
