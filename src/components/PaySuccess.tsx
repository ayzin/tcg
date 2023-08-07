import React from "react";
import {
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import {
  CartDialog,
  CartDialogProps,
  StyledFab,
  Transition,
} from "./CartItemsList";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export function PaySuccess(props: CartDialogProps) {
  const { onClose, open } = props;
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
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        <Paper sx={{ borderRadius: "20px" }}>
          <DialogTitle id="cart-dialog-title"></DialogTitle>
          <DialogContent sx={{ height: "250px" }}>
            <Grid container spacing={2} mt={1}>
              <Grid item xs={12} display="flex" justifyContent="center">
                <CheckCircleIcon sx={{ color: "#5edc49", fontSize: "100px" }} />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    verticalAlign: "middle"
                  }}
                >
                  Payment Success!
                </Typography>
              </Grid>
            </Grid>
          </DialogContent>
        </Paper>

        <Grid container spacing={1}>
          <Grid item xs={12} justifyContent={"center"} display={"flex"}>
            <StyledFab
              autoFocus
              onClick={handleClose}
              color="error"
              variant="circular"
              sx={{ marginTop: "-40px" }}
            >
              <Close />
            </StyledFab>
          </Grid>
        </Grid>
      </CartDialog>
    </>
  );
}
