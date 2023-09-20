"use client";

import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { useMyContext } from "@/app/context";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect } from "react";
import MobileNavigation from "./MobileNavigation";
import Navbar from "./Navbar";

import { useClerk } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { fetchCategories } from "@/app/utils/api";

import SearchInput from "./SearchInput";

const Header = () => {
  const { categories, setCategories } = useMyContext();

  const { user } = useClerk();
  const router = useRouter();

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCategories = () => {
    fetchCategories().then((res) => {
      console.log("Categories:", res);
      setCategories(res.data);
    });
  };

  return (
    <header
      className={`w-full h-[80px] lg:h-[110px] bg-white flex items-center 
      justify-between z-20 sticky top-0 transition-transform duration-300 border-b-2  border-blue-500 shadow-md`}
    >
      <div className="container mx-auto px-4 md:px-3 sm:px-1 lg:px-5 ">
        <div className="flex flex-wrap items-center lg:justify-around justify-between pb-2 pt-3 ">
          <div className="lg:flex hidden items-center">
            <SearchInput />
          </div>
          <div className="flex items-center">
            <MobileNavigation categories={categories} />
          </div>
          <div className=" flex items-center justify-center pr-10">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={250}
                height={100}
                className="lg:mr-[100px]"
              />
            </Link>
          </div>
          {user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <div className="lg:flex hidden items-center space-x-3 mx-5">
              {/* Replace with your user login/register links */}
              <button className="rounded-xl px-4 py-2 bg-indigo-600 font-bold mr-0 hover:scale-105">
                <a href="/signin" className="text-white hover:text-gray-700 ">
                  Login
                </a>
              </button>
              <button className="bg-emerald-600 rounded-xl px-4 py-2 font-bold ml-0 hover:scale-105">
                <a href="/signup" className="text-white hover:text-gray-700 ">
                  Register
                </a>
              </button>
            </div>
          )}
          <div>
            <Navbar categories={categories} router={router} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
