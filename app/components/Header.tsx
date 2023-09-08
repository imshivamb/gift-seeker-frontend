"use client";

import React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { useMyContext } from "@/app/context";
import logo from "../assets/logo.png";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

import { useState, useEffect } from "react";
import MobileNavigation from "./MobileNavigation";
import Navbar from "./Navbar";

import { useClerk } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";
import { fetchCategories } from "@/app/utils/api";

import SearchInput from "./SearchInput";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`w-full h-[80px] lg:h-[140px] bg-white flex items-center 
      justify-between z-20 sticky top-0 transition-transform duration-300 border-b-2  border-blue-500 shadow-md`}
    >
      <div className="container mx-auto px-4 md:px-3 sm:px-1 lg:px-8 ">
        <div className="flex flex-wrap items-center lg:justify-around justify-between pb-2 pt-0 ">
          <div className="flex items-center">
            <SearchInput />

            <MobileNavigation
              isMobileMenuOpen={isMobileMenuOpen}
              toggleMobileMenu={toggleMobileMenu}
              categories={categories}
            />
          </div>
          <div className=" flex items-center justify-center ">
            <Link href="/">
              <div className="flex items-center justify-center md:justify-start ">
                <div className="top-0">
                  <Image src={logo} alt="logo" width={250} height={100} />
                </div>
              </div>
            </Link>
          </div>
          {user ? (
            <UserButton afterSignOutUrl="/" />
          ) : (
            <div className="lg:flex hidden items-center space-x-6">
              {/* Replace with your user login/register links */}
              <button className="rounded-xl px-4 py-2 bg-indigo-400 font-bold mr-0">
                <a href="/signin" className="text-white hover:text-gray-700">
                  Login
                </a>
              </button>
              <button className="bg-emerald-400 rounded-xl px-4 py-2 font-bold ml-0">
                <a href="/signup" className="text-white hover:text-gray-700">
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
