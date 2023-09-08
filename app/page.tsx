"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import { fetchProducts } from "@/app/utils/api";
import { useMyContext } from "@/app/context";
import ProductCard from "@/app/components/ProductCard";

export default function Home() {
  const { products, setProducts } = useMyContext();

  const getProducts = async () => {
    try {
      const res = await fetchProducts();
      console.log("Products:", res);
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="m-auto">
        <ProductCard products={products} />
      </div>
    </>
  );
}
