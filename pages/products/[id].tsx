/* eslint-disable @next/next/no-img-element */
import AddToCart from "@/components/AddToCart";
import { Product } from "@/types";
import {
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";

interface GetStaticPaths {
  params: {
    id: string;
  };
}
interface ProductPageProps {
  product: Product;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  image: {
    width: "100vh",
    height: "100hh",
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
}));

const ProductPage: React.FC<ProductPageProps> = ({ product }) => {
  const classes = useStyles();
  const { name, description, price, image } = product;
  return (
    <Container maxWidth="lg">
      <Paper className={classes.paper}>
        <Grid container xs={12}>
          <Grid container className={classes.image}>
            <img className={classes.img} alt={name} src={image} />
          </Grid>
          <Grid container>
            <Grid xs={12} sm container direction="column">
              <Grid item xs>
                <Typography gutterBottom variant="h3">
                  {name}
                </Typography>
              </Grid>
              <Grid item xs container direction="column">
                <Typography gutterBottom>{description}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="h5">£ {price.toString()} EURO</Typography>
              </Grid>
              <Grid item>
                <AddToCart product={product} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`http://localhost:3000/api/products`);
  const products = (await res.json()) as Product[];
  const paths = products.map((product) => ({
    params: { id: product.id.toString() },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }: GetStaticPaths) {
  const res = await fetch(`http://localhost:3000/api/products/${params.id}`);
  const product = await res.json();

  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
