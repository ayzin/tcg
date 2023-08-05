import { Typography } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import Filter from "components/Filter";
import Loading from "components/Loading";
import { useEffect, useState } from "react";
import { fetchCards } from "services/api/card";

export const HomePage = () => {
  const [cards, setCards] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);

  const CardList = useMutation({
    mutationFn: () => fetchCards(),
    onSuccess: (data) => {
      setCards(data.data);
      setLoading(false);
    },
  });

  useEffect(() => {
    setLoading(true);
    CardList.mutate();
  }, []);

  return (
    <>
      <div>
        <Filter />
      </div>
      {cards?.length > 0 ? (
        <>
          {(cards || []).map((card: any, index: number) => {
            return (
              <Typography variant="caption" key={index}>
                {" "}
                {index + 1} . {card.name}{" "}
              </Typography>
            );
          })}
        </>
      ) : (
        <Loading loading={loading} />
      )}
    </>
  );
};
