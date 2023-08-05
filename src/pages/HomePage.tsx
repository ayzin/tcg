import { Grid } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import Filter from "components/Filter";
import Loading from "components/Loading";
import { useEffect, useState } from "react";
import { fetchCards } from "services/api/card";
import Cards from "../components/Cards";
import { Search } from "types/common/search";
import FloatingButton from "layout/Footer/FloatingButton";

export const HomePage = () => {
  const [cards, setCards] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  // const [index, setIndex] = useState(1);
  const [pageSize, setPageSize] = useState(9);

  const CardList = useMutation({
    mutationFn: (params: Search) => fetchCards(params),
    onSuccess: (data) => {
      const numberOfItems = pageSize * 1;

      const moreCardInfo = [];
      for (let i = 0; i < data.data?.length; i++) {
        if (i < numberOfItems) moreCardInfo.push(data.data[i]);
      }
      setCards(data.data);
      setLoading(false);
    },
  });

  useEffect(() => {
    setLoading(true);
  }, []);

  useEffect(() => {
    setLoading(true);
    const params = { page: 1, pageSize: pageSize };
    CardList.mutate(params);
  }, [pageSize]);

  return (
    <>
      <div>
        <Filter />
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
          <Grid item xs={12} m={6}></Grid>
          <FloatingButton pageSize={pageSize} setPageSize={setPageSize} />
        </Grid>
      ) : (
        <Loading loading={loading} />
      )}
    </>
  );
};
