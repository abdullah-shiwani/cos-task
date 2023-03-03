import { Product } from "@/types";
import {
  Badge,
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
  Typography,
} from "@material-ui/core";
import { Star } from "@material-ui/icons";

const ProductPrice = ({ data }: { data: Product["reviews"] }) => {
  if (!data?.length) {
    return (
      <Typography variant="subtitle1" component="p">
        No reviews
      </Typography>
    );
  }
  return (
    <List
      aria-labelledby="product-reviews"
      component="nav"
      dense={true}
      subheader={
        <Typography variant="h5" color="textSecondary">
          Reviews
        </Typography>
      }
    >
      {data.map((review, i) => (
        <ListItem key={i} alignItems="flex-start" divider>
          <ListItemText
            primary={
              <>
                <Typography component={"span"} color="textPrimary">
                  {review.comment}
                </Typography>
                {Array.from(Array(review.rating).keys()).map((_, i) => (
                  <Badge key={i} color="secondary">
                    <Star />
                  </Badge>
                ))}
              </>
            }
            secondary={
              <>
                <Typography component="span" color="textPrimary">
                  {review.name}
                </Typography>
                — {review.createdAt}
              </>
            }
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ProductPrice;
