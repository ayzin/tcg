import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button, Typography } from "@mui/material";

const StyledFab = styled(Button)({
  position: "absolute",
  zIndex: 1,
  top: -7,
  left: 0,
  right: 0,
  margin: "0 auto",
  width: 130,
  borderRadius: '10px',
});

export default function FloatingButton() {
  return (
    <AppBar
      position="fixed"
      color="transparent"
      sx={{
        top: "auto",
        bottom: 0,
        bgcolor: "transparent",
        boxShadow: "initial",
        height: 60,
      }}
    >
      <Toolbar>
        <StyledFab color="primary" aria-label="add" size="medium" variant="contained">
        <ShoppingCartIcon sx={{ mr: 1, fontSize: '20px' }} />
           <Typography variant="caption">View cart</Typography>
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}
