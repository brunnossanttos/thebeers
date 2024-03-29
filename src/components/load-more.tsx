"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "@/components/ui/spinner";
import { Beer } from "@/types";
import { Beers } from "@/components/beers";
import { fetchBeers } from "@/actions/fetch-beers";

export function LoadMore() {
  const [beers, setBeers] = useState<Beer[]>([]);
  const [page, setPage] = useState(1);

  const { ref, inView } = useInView();

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const loadMoreBeers = async () => {
    await delay(1000);
    const nextPage = (page % 7) + 1;
    const newProducts = (await fetchBeers(nextPage)) ?? [];

    if (Array.isArray(newProducts)) {
      setBeers((prevProducts: Beer[]) => [...prevProducts, ...newProducts]);
      setPage(nextPage);

    } 
  };

  useEffect(() => {
    if (inView) {
      loadMoreBeers();
    }
  }, [inView]);

  return (
    <>
      <Beers beers={beers} />
      <div
        className="flex justify-center items-center p-4 col-span-1 sm:col-span-2 md:col-span-3"
        ref={ref}
      >
        <Spinner />
      </div>
    </>
  );
}