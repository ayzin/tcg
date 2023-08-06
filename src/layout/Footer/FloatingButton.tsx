import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Badge, Button, Fade, Grid, useScrollTrigger } from "@mui/material";
import Logo from "../../assets/cart.png";
import { Search } from "@mui/icons-material";
import { useState } from "react";
import { CartItemsList } from "components/CartItemsList";
import { useCartContext } from "context/CartContext";

interface Props {
  pageSize: number;
  setPageSize: any;
  window?: () => Window;
  children?: React.ReactElement;
}

const StyledBadge = styled(Badge)({
  position: "absolute",
  zIndex: 1,
  top: -7,
  left: 25,
  right: 0,
  margin: "0 auto",
  width: 150,
});

const StyledShowMore = styled(Button)({
  position: "absolute",
  zIndex: 1,
  top: -50,
  left: 0,
  right: 0,
  margin: "0 auto",
  width: 130,
  borderRadius: "10px",
});

function ScrollEnd(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <Fade in={trigger}>
      <Box role="presentation">{children}</Box>
    </Fade>
  );
}

export default function FloatingButton(props: Props) {
  const { pageSize, setPageSize } = props;
  const [open, setOpen] = useState(false);
  const {cartItemsCount} = useCartContext();

  const handleClose = (value: string) => {
    setOpen(false);
  };

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
        <ScrollEnd {...props}>
          <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
            {pageSize < 250 ? (
              <StyledShowMore
                onClick={() => setPageSize(pageSize + 9)}
                size="small"
                startIcon={<Search />}
                color="inherit"
              >
                {" "}
                Show More{" "}
              </StyledShowMore>
            ) : (
              ""
            )}
          </Grid>
        </ScrollEnd>

        <StyledBadge
          showZero = {cartItemsCount > 0}
          badgeContent={cartItemsCount}
          color="error"
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <Button
            color="primary"
            aria-label="add"
            size="medium"
            variant="contained"
            startIcon={<img src={Logo} alt="cart" />}
            onClick={() => {
              setOpen(true);
            }}
            sx={{borderRadius: 3}}
          >
            View cart
          </Button>
        </StyledBadge>

        <Box sx={{ flexGrow: 1 }} />
        <CartItemsList open={open} onClose={handleClose} />
      </Toolbar>
    </AppBar>
  );
}
