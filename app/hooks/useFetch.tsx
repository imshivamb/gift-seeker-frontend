"use client";

import { useState, useEffect } from "react";
import { fetchData } from "@/app/utils/api";

function useFetch<T>(endpoint: string): { data: T[] } {
  const [data, setData] = useState<T[]>([]);

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const res = (await fetchData(endpoint)) as T[];
        setData(res);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchDataFromApi();
  }, [endpoint]);

  return { data };
}

export default useFetch;
