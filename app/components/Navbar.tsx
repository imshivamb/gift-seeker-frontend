import React from "react";
import Link from "next/link";
import { Category, SubCategory } from "@/app/context";

import { ChevronDown, Menu, X } from "lucide-react";

import { useState, useEffect } from "react";

type Props = {
  categories: { [key: number]: Category };
  router: any;
};

const Navbar: React.FC<Props> = ({ categories, router }) => {
  const categoryArray = Object.values(categories);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);

  const toggleMoreDropdown = (open: boolean) => {
    setIsMoreDropdownOpen(open);
  };

  const [categoryDropdownOpen, setCategoryDropdownOpen] = useState(
    categoryArray.map(() => false)
  );
  const toggleCategoryDropdown = (index: number) => {
    const newDropdownOpen = [...categoryDropdownOpen];
    newDropdownOpen[index] = !newDropdownOpen[index];
    setCategoryDropdownOpen(newDropdownOpen);
  };

  const renderSubCategories = (subCategoryData: SubCategory[]) => {
    return subCategoryData.map((subCategory: SubCategory) => (
      <Link
        key={subCategory.id}
        href="/category/[id]"
        as={`/category/${subCategory.id}`}
      >
        <div className="block py-2 px-4 hover:text-gray-500 active:underline-offset-2 border border-b-gray-100">
          {subCategory.attributes.title}
        </div>
      </Link>
    ));
  };
  return (
    <nav className="bg-white text-black pt-2 pb-0">
      <ul className="lg:flex hidden uppercase  justify-center text-center space-x-14 font-poppins font-extrabold text-xl  pb-1 ">
        <li>
          <Link
            href="/"
            className="hover:text-gray-500 active:underline-offset-2"
          >
            What's New
          </Link>
        </li>
        {categoryArray.map((category, index) => (
          <li
            key={category.id}
            className="relative group"
            onMouseEnter={() => toggleCategoryDropdown(index)}
            onMouseLeave={() => toggleCategoryDropdown(index)}
          >
            <div className="flex items-center justify-between">
              <Link href="#">
                <div className="hover:text-gray-500 active:underline-offset-2">
                  {category.attributes.title}{" "}
                  <ChevronDown className="relative top-1 float-right w-6 h-6" />
                </div>
              </Link>
            </div>

            {categoryDropdownOpen[index] && (
              <ul className=" text-[17px] absolute hidden space-y-2 bg-[#f7f9fa] text-gray-900 group-hover:block">
                <li className="border border-b-gray-500 ">
                  {renderSubCategories(category.attributes.sub_categories.data)}
                </li>
              </ul>
            )}
          </li>
        ))}
        <li
          onMouseEnter={() => toggleMoreDropdown(true)}
          onMouseLeave={() => toggleMoreDropdown(false)}
          className="relative group"
        >
          <div>
            <Link
              href="/"
              className="hover:text-gray-500 active:underline-offset-2"
            >
              More
              <ChevronDown className="relative top-1 float-right w-6 h-6  " />
            </Link>
          </div>
          {isMoreDropdownOpen && (
            <div
              onMouseEnter={() => toggleMoreDropdown(true)}
              onMouseLeave={() => toggleMoreDropdown(false)}
              className="absolute  text-left text-md px-8 space-y-2 bg-white text-gray-900"
            >
              <ul className="leading-loose whitespace-nowrap ">
                <li>
                  <Link
                    href="/contactus"
                    className=" hover:text-gray-500 active:underline-offset-2"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy-policy"
                    className=" hover:text-gray-500 active:underline-offset-2"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliate"
                    className=" hover:text-gray-500 active:underline-offset-2"
                  >
                    Affiliate
                  </Link>
                </li>
                {/* Add more dropdown items as needed */}
              </ul>
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
