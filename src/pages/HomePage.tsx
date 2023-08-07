import { Grid, Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import Filter from "components/Filter";
import Loading from "components/Loading";
import { useEffect, useState } from "react";
import { fetchCards } from "services/api/card";
import Cards from "../components/Cards";
import { Search } from "types/common/search";
import FloatingButton from "layout/Footer/FloatingButton";
import { useCardContext } from "context/CardContext";
import { CardInfo } from "types/card";
// import { CartContext } from "context/CartContext";

export const HomePage = () => {
  const [cards, setCards] = useState<CardInfo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [pageSize, setPageSize] = useState<number>(9);
  const [typeId, setTypeId] = useState<string>("");
  const [rarityId, setRaritiesId] = useState<string>("");
  const [setId, setSetId] = useState<string>("");
  const [name, setName] = useState<string>("");

  const { setCardsInfo } = useCardContext();
  const CardList = useMutation({
    mutationFn: (params: Search) => fetchCards(params),
    onSuccess: (data) => {
      const numberOfItems = pageSize * 1;

      const moreCardInfo = [];
      for (let i = 0; i < data.data?.length; i++) {
        if (i < numberOfItems) moreCardInfo.push(data.data[i]);
      }
      setCards(data.data);
      setCardsInfo(data.data);
      setLoading(false);
    },
  });

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = {
      page: 1,
      pageSize: pageSize,
      name: name,
      type: typeId,
      setId: setId,
      rarity: rarityId,
    };
    CardList.mutate(params);
  }, [pageSize, typeId, rarityId, setId, name]);

  return (
    <>
      <div>
        <Filter
          setName={setName}
          setTypeId={setTypeId}
          setSetId={setSetId}
          setRaritiesId={setRaritiesId}
        />
      </div>
      {cards?.length > 0 ? (
        <Grid container spacing={3}>
          {(cards || []).map((card: any, index: number) => {
            return (
              <Grid
                item
                xs={12}
                md={4}
                key={index}
                display="flex"
                justifyContent="center"
              >
                <Cards cardInfo={card} />
              </Grid>
            );
          })}
          <Grid item xs={12} mb={10}></Grid>

        </Grid>
      ) : (
        <Loading loading={loading} />
      )}

      {cards?.length > 0 ? (
        <FloatingButton pageSize={pageSize} setPageSize={setPageSize} />
      ) : (
        ""
      )}

      {cards?.length === 0 ? (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant="body1"
              sx={{
                color: "grey",
                textAlign: "center",
                verticalAlign: "middle",
                lineHeight: "150px",
              }}
            >
              There is no data.
            </Typography>
          </Grid>
        </Grid>
      ) : (
        ""
      )}
    </>
  );
};
