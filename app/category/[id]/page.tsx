"use client";
import { useEffect } from "react";

import { fetchSubCategories } from "../../utils/api";
import ProductCard from "@/app/components/ProductCard";
import { useParams } from "next/navigation";
import { useMyContext } from "@/app/context";
import Image from "next/image";

import Head from "next/head";
import useFetch from "@/app/hooks/useFetch";

const SubCategoryPage = () => {
  const { subcategories, setSubCategories } = useMyContext();

  const getSubcategories = async () => {
    try {
      const res = await fetchSubCategories();
      console.log("Subcategories:", res);
      setSubCategories(res.data);
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  useEffect(() => {
    getSubcategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const myLoader = ({ src }: { src: string }) => {
    const imageUrl = `http://localhost:1337${src}`;

    return imageUrl;
  };

  // const { data } = useFetch(`/sub-categories?populate=*`);
  // console.log(data);

  const { id } = useParams();

  if (!id) {
    return null; // You can add loading or error handling here
  }

  const numericId = typeof id === "string" ? id.replace("gifts-for-", "") : "";

  // Convert it to a number
  const subcategoryId = Number(numericId);

  // Find the corresponding subcategory
  const subcategory = subcategories.find((s) => s.id === subcategoryId);

  if (!subcategory) {
    return (
      <div className="flex flex-row justify-center">
        <p className="text-xl font-bold text center">Loading...</p>
      </div>
    );
  }

  return (
    <main className="max-w-screen-lg mx-auto h-auto px-6 py-20">
      <Head>
        <title>{subcategory?.attributes?.title}</title>
      </Head>
      <div className="flex flex-col items-center">
        <h1 className="text-4xl text-slate-700 font-poppins font-bold text-center underline underline-offset-4">
          Gifts for {subcategory.attributes?.title}
        </h1>

        <div className="my-4 bg-[#ECEAF3]/50 w-full h-full flex items-center justify-center">
          <Image
            loader={myLoader}
            src={subcategory?.attributes?.image?.data?.attributes?.url}
            alt={subcategory?.attributes?.title}
            width={600}
            height={300}
            className=""
          />
        </div>
        <div className="h-[200px] w-full  m-10 font-palanquin">
          <p>{subcategory.attributes?.description}</p>
        </div>
      </div>
      <div>
        <ProductCard
          products={subcategory.attributes?.products?.data.map((product) => ({
            ...product,
            imageUrl: product.attributes?.image?.data?.attributes?.url,
          }))}
        />
      </div>
    </main>
  );
};

export default SubCategoryPage;
