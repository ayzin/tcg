import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import {
  Badge,
  Box,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useCardContext } from "context/CardContext";
import { CartItem } from "types/cartContext";
import { useCartContext } from "context/CartContext";
import { Close } from "@mui/icons-material";

export function CartItems(props: CartItem) {
  const { id, quantity } = props;
  const { cardsInfo } = useCardContext();
  const { increaseCardCount, decreaseCardCount } = useCartContext();
  const item = cardsInfo?.find((i) => i.id === id);
  if (item === null) return null;

  const price = item?.cardmarket?.prices?.trendPrice ?? 0;
  return (
    <Box sx={{ display: "flex", mb: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <CardMedia
            component="img"
            sx={{ width: { xs: 90, md: 120 } }}
            image={item?.images?.small}
            alt="Pokemon Card"
          />
        </Grid>
        <Grid item xs={6}>
          <CardContent>
            <Typography component="div" variant="h5">
              {item?.name}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              component="div"
            >
              <span style={{ fontWeight: "bold", color: "#212020" }}>
                ${price + " "}
              </span>
              <span style={{ color: "#757575" }}>per card</span>
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="subtitle1" component="div">
              <span style={{ fontWeight: "bold", color: "#fd3734" }}>
                {item?.set?.total && item?.set?.total > 1
                  ? item?.set?.total - quantity
                  : item?.set?.total}
              </span>
              <span style={{ color: "#c0bfbf" }}>
                {item?.set?.total && item?.set?.total > 1
                  ? " cards left"
                  : " card left"}
              </span>
            </Typography>
          </CardContent>
        </Grid>
        <Grid item xs={3}>
          <CardContent sx={{ display: "flex", justifyContent: "end" }}>
            <Badge
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              badgeContent={
                <span style={{ display: "flex", flexDirection: "column" }}>
                  <>
                    {item?.set?.total && item?.set?.total > quantity ? (
                      <KeyboardArrowUpIcon
                        sx={{ fontSize: "22px", mb: "-8px", color: "#298bfd" }}
                        onClick={() => {
                          increaseCardCount(id);
                        }}
                      />
                    ) : (
                      ""
                    )}
                  </>

                  <>
                    {quantity > 1 ? (
                      <KeyboardArrowDownIcon
                        sx={{ fontSize: "22px", color: "#298bfd" }}
                        onClick={() => {
                          decreaseCardCount(id);
                        }}
                      />
                    ) : (
                      <Close
                        sx={{ fontSize: "20px", color: "#fd3734" }}
                        onClick={() => {
                          decreaseCardCount(id);
                        }}
                      />
                    )}
                  </>
                </span>
              }
            >
              {" "}
              <Typography component="div" variant="h5" color="primary" pr={1.4}>
                {quantity}
              </Typography>
            </Badge>
          </CardContent>
          <CardContent sx={{ display: "flex", justifyContent: "flex-end" }}>
            <span style={{ display: "flex", flexDirection: "column" }}>
              <Typography
                variant="body2"
                component="div"
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                Price
              </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ color: "#298bfd" }}
              >
                ${(quantity * price)?.toFixed(2)}
              </Typography>
            </span>
          </CardContent>
        </Grid>
      </Grid>
    </Box>
  );
}
