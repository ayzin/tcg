import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import { Box, Fab, styled, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/Logo.png";

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const StyledFab = styled(Fab)({
  position: "absolute",
  zIndex: 1,
  top: '2.6rem',
  left: 0,
  right: 0,
  margin: "0 auto",
  backgroundColor: '#fff',
  boxShadow: 'none'
});

export default function ElevateAppBar() {
  const theme = useTheme();
  let navigate = useNavigate();

  return (
    <>
      <ElevationScroll>
        <AppBar
          sx={{
            bgcolor: "#fff",
            color: theme.palette.text.primary,
            boxShadow: "initial",
            height: 70
          }}
        >
          <Toolbar sx={{ justifyContent: "center" }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, mt: 1 }}>
              TCG Marketplace
            </Typography>
            <StyledFab size="small" onClick={()=>{navigate('/')}}>
              <Box
                component="img"
                sx={{
                  
                }}
                alt="MyLogo"
                src={Logo}
              />
              <Box sx={{ flex: "1" }}></Box>
            </StyledFab>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}
