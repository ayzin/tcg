import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Autocomplete, Grid, TextField } from "@mui/material";

export default function Filter() {
  return (
    <Grid container spacing={0} mt={5} mb={2}>
      <Grid item md={2}></Grid>
      <Grid item md={8}>
        <Paper
          sx={{
            p: "2px 4px",
            alignItems: "center",
            borderRadius: "20px",
            height: 44,
            display: { xs: "none", md: "block" },
          }}
        >
          <Grid container>
            <Grid item xs={12} md={4}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                type="search"
                placeholder="Name.."
                inputProps={{ "aria-label": "Name" }}
              />
            </Grid>
            <Grid item xs={4} md={3}>
              <Autocomplete
                disablePortal
                id="type"
                size="small"
                options={[
                  "Colorless",
                  "Darkness",
                  "Dragon",
                  "Fairy",
                  "Fighting",
                  "Fire",
                  "Grass",
                  "Lightning",
                  "Metal",
                  "Psychic",
                  "Water",
                ]}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Type" />
                )}
              />
            </Grid>
            <Grid item xs={4} md={2.5}>
              <Autocomplete
                disablePortal
                id="type"
                size="small"
                options={[
                  "Colorless",
                  "Darkness",
                  "Dragon",
                  "Fairy",
                  "Fighting",
                  "Fire",
                  "Grass",
                  "Lightning",
                  "Metal",
                  "Psychic",
                  "Water",
                ]}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Rarity" />
                )}
              />
            </Grid>
            <Grid item xs={4} md={2.5}>
              <Autocomplete
                disablePortal
                id="type"
                size="small"
                options={[
                  "Colorless",
                  "Darkness",
                  "Dragon",
                  "Fairy",
                  "Fighting",
                  "Fire",
                  "Grass",
                  "Lightning",
                  "Metal",
                  "Psychic",
                  "Water",
                ]}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Set" />
                )}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item md={2}></Grid>
      <Grid
        item
        xs={12}
        sx={{ display: { xs: "block", md: "none", lg: "none" } }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper
              sx={{
                p: "2px 4px",
                alignItems: "center",
                borderRadius: "20px",
                height: 44,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1, width: "97%" }}
                type="search"
                placeholder="Name.."
                inputProps={{ "aria-label": "Name" }}
              />
            </Paper>
          </Grid>
          <Grid item xs={4} md={3}>
            <Paper
              sx={{
                p: "2px 4px",
                alignItems: "center",
                borderRadius: "20px",
                height: 44,
              }}
            >
              <Autocomplete
                disablePortal
                id="type"
                size="small"
                options={[
                  "Colorless",
                  "Darkness",
                  "Dragon",
                  "Fairy",
                  "Fighting",
                  "Fire",
                  "Grass",
                  "Lightning",
                  "Metal",
                  "Psychic",
                  "Water",
                ]}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Type" />
                )}
              />
            </Paper>
          </Grid>
          <Grid item xs={4} md={2.5}>
            <Paper
              sx={{
                p: "2px 4px",
                alignItems: "center",
                borderRadius: "20px",
                height: 44,
              }}
            >
              <Autocomplete
                disablePortal
                id="type"
                size="small"
                options={[
                  "Colorless",
                  "Darkness",
                  "Dragon",
                  "Fairy",
                  "Fighting",
                  "Fire",
                  "Grass",
                  "Lightning",
                  "Metal",
                  "Psychic",
                  "Water",
                ]}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Rarity" />
                )}
              />
            </Paper>
          </Grid>
          <Grid item xs={4} md={2.5}>
            <Paper
              sx={{
                p: "2px 4px",
                alignItems: "center",
                borderRadius: "20px",
                height: 44,
              }}
            >
              <Autocomplete
                disablePortal
                id="type"
                size="small"
                options={[
                  "Colorless",
                  "Darkness",
                  "Dragon",
                  "Fairy",
                  "Fighting",
                  "Fire",
                  "Grass",
                  "Lightning",
                  "Metal",
                  "Psychic",
                  "Water",
                ]}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Set" />
                )}
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
