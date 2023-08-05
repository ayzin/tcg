import * as React from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, ButtonProps, CardActions, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { amber } from "@mui/material/colors";
import { CardInfo } from "types/card";

interface Props {
  cardInfo: CardInfo;
}

const SelectButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: "#1d1c1c",
  backgroundColor: "#fece2a",
  margin: "auto",
  borderRadius: "20px",
  top: -35,
  "&:hover": {
    backgroundColor: amber[500],
  },
  "&:active": {
    backgroundColor: amber[500],
  },
  "&:focus": {
    backgroundColor: amber[500],
  },
}));

export default function Cards(props: Props) {
  const { cardInfo } = props;

  return (
    <div style={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="auto"
        image={cardInfo.images.large}
        alt="green iguana"
        sx={{ width: "70%", margin: "auto", mb: -8 }}
      />
      <Paper elevation={0} sx={{ borderRadius: "20px" }}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            mt={7}
            textAlign="center"
            fontWeight="bold"
          >
            {cardInfo.name}
          </Typography>
          <Typography
            variant="caption"
            color="primary"
            display="flex"
            justifyContent="center"
            mb={1}
          >
            {cardInfo.rarity ?? "-"}
          </Typography>
          <Box
            width={200}
            display="flex"
            justifyContent="space-between"
            sx={{ color: "grey", mb: 3 }}
            margin="auto"
          >
            <Typography variant="h6" textAlign="center">
              {cardInfo.cardmarket?.prices?.trendPrice ?? '.. '}$
            </Typography>
            <Typography variant="h6" textAlign="center">
              {cardInfo.set?.total} left
            </Typography>
          </Box>
        </CardContent>
      </Paper>

      <CardActions>
        <SelectButton size="large" variant="contained">
          Select Card
        </SelectButton>
      </CardActions>
    </div>
  );
}
