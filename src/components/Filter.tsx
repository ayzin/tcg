import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchRarities, fetchSets, fetchType } from "services/api/card";
import { useEffect, useState } from "react";
import { Set } from "types/set";

interface Props {
  setRaritiesId: (id: string) => void;
  setTypeId: (id: string) => void;
  setSetId: (id: string) => void;
  setName: (name: string) => void;
}

export default function Filter(props: Props) {
  const {setRaritiesId, setTypeId, setSetId, setName} = props;
  const [type, setType] = useState<string[]>([]);
  const [rarities, setRarities] = useState<string[]>([]);
  const [setList, setSetList] = useState<{ id: string; label: string }[]>([]);

  const { isLoading, data } = useQuery(
    ["featch_dropdowns"],
    () => Promise.all([fetchType(), fetchRarities(), fetchSets()]),
    { keepPreviousData: true }
  );

  useEffect(() => {
    if (!isLoading) {
      setType(data?.[0]?.data ?? []);
      setRarities(data?.[1]?.data ?? []);
      if (data?.[2]?.data) {
        const sets = (data?.[2]?.data || []).map((set: Set) => {
          return { id: set.id, label: set.name };
        });
        setSetList(sets);
      }
    }
  }, [isLoading, data]);

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
                onChange={(event)=> {setName(event.target.value)}}
              />
            </Grid>
            <Grid item xs={4} md={2.5}>
              <Autocomplete
                disablePortal
                id="type"
                size="small"
                onChange={(event, value) => {setTypeId(value ?? '')}}
                options={type}
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
                onChange={(event, value) => setRaritiesId(value ?? '')}
                options={rarities}
                renderInput={(params) => (
                  <TextField {...params} placeholder="Rarity" />
                )}
              />
            </Grid>
            <Grid item xs={4} md={3}>
              <Autocomplete
                disablePortal
                id="type"
                size="small"
                onChange={(event, value) => setSetId(value ? value.id : '')}
                options={setList}
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
                onChange={(event)=> {setName(event.target.value)}}
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
                options={type}
                onChange={(event, value) => {setTypeId(value ?? '')}}
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
                options={rarities}
                onChange={(event, value) => setRaritiesId(value ?? '')}
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
                options={setList}
                onChange={(event, value) => setSetId(value ? value.id : '')}
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
