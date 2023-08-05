import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Grid } from "@mui/material";
import Logo from "../../assets/cart.png";
import { Search } from "@mui/icons-material";

interface Props {
  pageSize: number;
  setPageSize: any;
}
const StyledFab = styled(Button)({
  position: "absolute",
  zIndex: 1,
  top: -7,
  left: 0,
  right: 0,
  margin: "0 auto",
  width: 150,
  borderRadius: "10px",
});

const StyledShowMore = styled(Button)({
  position: "absolute",
  zIndex: 1,
  top: -50,
  left: 0,
  right: 0,
  margin: "0 auto",
  width: 150,
  borderRadius: "10px",
});

export default function FloatingButton(props: Props) {
  const { pageSize, setPageSize } = props;
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
        <StyledFab
          color="primary"
          aria-label="add"
          size="medium"
          variant="contained"
          startIcon={<img src={Logo} alt="cart" />}
        >
          View cart
        </StyledFab>
        <Box sx={{ flexGrow: 1 }} />
      </Toolbar>
    </AppBar>
  );
}
