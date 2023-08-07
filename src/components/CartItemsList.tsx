import React, { useState } from "react";
import {
  Button,
  DialogActions,
  DialogContent,
  Fab,
  Grid,
  Paper,
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
import { PaySuccess } from "./PaySuccess";

export const StyledFab = styled(Fab)({
  borderRadius: "15px",
});

export const CartDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialog-container": {
    alignItems: "flex-end",
  },
}));

export const Transition = React.forwardRef(function Transition(
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
  const [openSuccess, setOpenSuccess] = useState<boolean>(false);
  const handleClose = () => {
    onClose("");
  };

  const handleShowSucess = () => {
    setOpenSuccess(true);
    removeCards();
    onClose("");
  };

  const handleCloseSuccess = (value: string) => {
    setOpenSuccess(false);
  };

  return (
    <>
      <CartDialog
        onClose={handleClose}
        TransitionComponent={Transition}
        keepMounted
        open={open}
        fullWidth
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        {cartItems?.length > 0 ? (
          <>
            <Paper
              sx={{
                maxHeight: 550,
                overflow: "auto",
                borderRadius: " 20px 20px 0px 0px",
              }}
            >
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
            </Paper>
            <Paper elevation={0} sx={{ borderRadius: "0px 0px 20px 20px" }}>
              <DialogActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  backgroundColor: "transparent",
                }}
              >
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

              <DialogActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" fontWeight="bold">
                  Total cards
                  <span style={{ color: "#fd3734", marginLeft: "90px" }}>
                    {cartItems.reduce((total, cartItem) => {
                      return total + cartItem.quantity;
                    }, 0)}
                  </span>
                </Typography>
              </DialogActions>

              <DialogActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h5" fontWeight="bold">
                  Total price
                  <span style={{ color: "#fd3734", marginLeft: "20px" }}>
                    $
                    {cartItems
                      .reduce((total, cartItem) => {
                        const item = cardsInfo?.find(
                          (i) => i.id === cartItem.id
                        );
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
              <DialogActions
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button
                  onClick={handleShowSucess}
                  color="primary"
                  variant="contained"
                  sx={{ borderRadius: "20px" }}
                  size="large"
                >
                  Pay Now
                </Button>
              </DialogActions>
              <div style={{ height: "40px" }}></div>
            </Paper>
          </>
        ) : (
          <Paper sx={{borderRadius: '20px'}}>
            <DialogContent sx={{ height: "200px", margin: "auto" }}>
              <Typography
                variant="body1"
                sx={{
                  color: "grey",
                  textAlign: "center",
                  verticalAlign: "middle",
                  lineHeight: "150px",
                }}
              >
                There is no selected card in your cart
              </Typography>
            </DialogContent>
          </Paper>
        )}

        <Grid container spacing={1}>
          <Grid item xs={12} justifyContent={"center"} display={"flex"}>
            <StyledFab
              autoFocus
              onClick={handleClose}
              color="error"
              variant="extended"
              sx={{ marginTop: "-24px" }}
            >
              <Close sx={{ fontSize: "18px", fontWeight: "bold" }} />
            </StyledFab>
          </Grid>
        </Grid>
      </CartDialog>
      <PaySuccess open={openSuccess} onClose={handleCloseSuccess} />
    </>
  );
}
