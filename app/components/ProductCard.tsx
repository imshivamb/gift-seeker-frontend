"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

import InfiniteScroll from "react-infinite-scroll-component";
import loadingimage from "../assets/loading.png";
import { Product } from "@/app/context";

type Props = {
  products: Product[];
};

// const myLoader = ({ src }: { src: string }) => {
//   return `http://localhost:1337${src}`;
// };

const ProductCard: React.FC<Props> = ({ products }) => {
  const initialProductCount = 24;
  const [visibleProducts, setVisibleProducts] = useState(initialProductCount);
  const [loading, setLoading] = useState(false);
  const productArray = Object.values(products).reverse();

  const loadMoreProducts = () => {
    if (!loading && visibleProducts < productArray.length) {
      setLoading(true);
      setTimeout(() => {
        const additionalProducts = 24;
        setVisibleProducts((prevCount) => prevCount + additionalProducts);
        setLoading(false);
      }, 1000);
    }
  };

  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 200
    ) {
      loadMoreProducts();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-[#eceae3]/30">
      <main className="mx-auto max-w-screen-lg bg-slate-50 px-6 py-20">
        <InfiniteScroll
          dataLength={visibleProducts}
          next={loadMoreProducts}
          hasMore={visibleProducts < productArray.length}
          loader={<p></p>}
          endMessage={<p></p>}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-custom lg:grid-cols-3 gap-4 sm:gap-6">
            {productArray.slice(0, visibleProducts).map((product) => (
              <div
                key={product.id}
                className="border-1 relative border-slate-500 shadow-md rounded-lg bg-white overflow-hidden max-w-[350px]  mx-auto"
              >
                <Head>
                  <title>{product?.attributes?.title}</title>
                  <meta
                    name="description"
                    content={product?.attributes?.description}
                  />
                  <meta
                    name="keywords"
                    content={product?.attributes?.keywords}
                  />
                </Head>
                <div className="object-cover">
                  {product?.attributes?.link && (
                    <Link
                      href={product?.attributes?.link}
                      target="_blank"
                      className=""
                    >
                      <Image
                        className="rounded-t-lg w-full h-72 object-contain"
                        // loader={myLoader}
                        src={product?.attributes?.image?.data?.attributes?.url}
                        alt={product?.attributes?.title}
                        width={330}
                        height={275}
                      />
                    </Link>
                  )}
                </div>
                <div className="p-3 text-left flex-grow">
                  <h3 className="font-semibold text-xl pb-3 text-gray-500">
                    {product?.attributes?.title}
                  </h3>
                  <p className={"text-sm text-gray-700 line-clamp-5"}>
                    {product?.attributes?.description}
                  </p>
                </div>
                <div className="p-4 flex bottom-0 sticky justify-between items-end">
                  <p className="text-lg font-bold">
                    &#8377;{product?.attributes?.price}
                  </p>
                  {product?.attributes?.link && (
                    <Link href={product?.attributes?.link} target="_blank">
                      <button className="bg-blue-700 hover:scale-105 hover:text-gray-200 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg">
                        Shop Now
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </InfiniteScroll>
        {loading && (
          <div className="flex justify-center items-center">
            <Image
              src={loadingimage}
              alt="Loading image"
              width={50}
              height={50}
            ></Image>
          </div>
        )}
      </main>
    </div>
  );
};

export default ProductCard;
