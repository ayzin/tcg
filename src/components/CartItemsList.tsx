import React from "react";
import {
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
  Typography,
} from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { TransitionProps } from "@mui/material/transitions";
import styled from "@mui/system/styled";
import { Close } from "@mui/icons-material";
import { useCartContext } from "context/CartContext";
import { CartItems } from "./CartItems";
import { useCardContext } from "context/CardContext";

const StyledFab = styled(Button)({
  borderRadius: "10px",
});

const CartDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    alignItems: "flex-end",
  },
}));

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface CartDialogProps {
  open: boolean;
  onClose: (value: string) => void;
}

export function CartItemsList(props: CartDialogProps) {
  const { onClose, open } = props;
  const { cartItems, removeCards } = useCartContext();
  const { cardsInfo } = useCardContext();
  const handleClose = () => {
    onClose("");
  };

  return (
    <>
      <CartDialog
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        open={open}
        scroll="paper"
        fullWidth
      >
        <DialogTitle id="cart-dialog-title"></DialogTitle>
        {cartItems?.length > 0 ? (
          <>
            <DialogContent>
              {(cartItems || []).map((itemInfo: any, index: number) => {
                return (
                  <CartItems
                    key={index}
                    id={itemInfo?.id}
                    quantity={itemInfo?.quantity}
                  />
                );
              })}
            </DialogContent>

            <DialogActions sx={{ margin: "auto" }}>
              <Button
                variant="text"
                onClick={() => {
                  removeCards();
                }}
                sx={{ color: "grey" }}
              >
                <u>Clear all</u>
              </Button>
            </DialogActions>

            <DialogActions sx={{ margin: "auto" }}>
              <Typography variant="h6" fontWeight="bold">
                Total cards
                <span style={{ color: "#fd3734", marginLeft: "99px" }}>
                  {cartItems.reduce((total, cartItem) => {
                    return total + cartItem.quantity;
                  }, 0)}
                </span>
              </Typography>
            </DialogActions>

            <DialogActions sx={{ margin: "auto" }}>
              <Typography variant="h5" fontWeight="bold">
                Total price
                <span style={{ color: "#fd3734", marginLeft: "20px" }}>
                  $
                  {cartItems
                    .reduce((total, cartItem) => {
                      const item = cardsInfo?.find((i) => i.id === cartItem.id);
                      return (
                        total +
                        (item?.cardmarket?.prices?.trendPrice || 0) *
                          cartItem.quantity
                      );
                    }, 0)
                    ?.toFixed(2)}
                </span>
              </Typography>
            </DialogActions>
            <DialogActions sx={{ margin: "auto" }}>
              <Button
                onClick={handleClose}
                color="primary"
                variant="contained"
                sx={{ borderRadius: "20px" }}
                size="large"
              >
                Pay Now
              </Button>
            </DialogActions>
          </>
        ) : (
          <DialogContent>
            <Typography variant="body1" margin={0} sx={{color : 'grey'}}>There is no selected card in your cart</Typography>
          </DialogContent>
        )}

        <DialogActions sx={{ margin: "auto" }}>
          <StyledFab
            autoFocus
            onClick={handleClose}
            color="error"
            variant="contained"
          >
            <Close />
          </StyledFab>
        </DialogActions>
      </CartDialog>
    </>
  );
}
