"use client";

import { useSearchParams } from "next/navigation";
import useFetch from "../hooks/useFetch";
import { Product } from "../context";
import ProductCard from "@/app/components/ProductCard";

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search?.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const { data } = useFetch<Product>(
    `/products?populate=*&filters[title][$containsi]=${encodedSearchQuery}`
  );
  const searchArray = Object.values(data);
  console.log("Search", searchArray);

  if (searchArray === undefined) {
    return <p>Loading...</p>;
  }

  if (searchArray === null) {
    return <p>Error: Failed to fetch data.</p>;
  }

  return (
    <div>
      {searchArray.map((product: any, index) => (
        <div key={index}>
          <ProductCard products={product} />
        </div>
      ))}
    </div>
  );
};

export default SearchPage;
