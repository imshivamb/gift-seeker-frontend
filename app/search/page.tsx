"use client";

import { useSearchParams } from "next/navigation";
import useFetch from "../hooks/useFetch";
import { Product } from "../context";
import ProductCard from "@/app/components/ProductCard";

const SearchPage = () => {
  const search = useSearchParams();
  const searchQuery = search ? search?.get("q") : null;
  const encodedSearchQuery = encodeURI(searchQuery || "");

  const { data } = useFetch<Product[]>(
    `/products?populate*=&filters[title][$contains]=${encodedSearchQuery}`
  );
  console.log(data);

  return (
    <div>
      <div>
        {/* {data?.map((product: Product[]) => (
          <ProductCard products={product} />
        ))} */}
      </div>
    </div>
  );
};

export default SearchPage;
