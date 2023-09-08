// MobileNavigation.tsx
import React, { useState } from "react";
import { X, Menu, ChevronDown } from "lucide-react";
import { Category, SubCategory } from "@/app/context";
import Link from "next/link";
import SearchInput from "./SearchInput";

interface MobileNavigationProps {
  isMobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
  categories: { [key: number]: Category };
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  categories,
}) => {
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
        href={`/${subCategory.attributes.title
          .toLowerCase()
          .replace(/\s+/g, "-")}`}
      >
        <div className="block py-2 px-4 hover:bg-gray-100">
          {subCategory.attributes.title}
        </div>
      </Link>
    ));
  };
  return (
    <div className="lg:hidden left-8 top-2 ">
      <button
        onClick={toggleMobileMenu}
        className=" text-gray-500 hover:text-gray-700 focus:text-gray-700 left-8 top-2  focus:outline-none block"
      >
        {isMobileMenuOpen ? (
          <X className="w-8 h-8 left-0" />
        ) : (
          <Menu className="w-12 h-12 left-0 " />
        )}
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <nav className=" mt-2 text-center flex justify-evenly">
          <ul
            className={`space-y-4 lg:pb-0 pb-12 absolute text-lg font-palanquin font-bold lg:static bg-white lg:z-auto z-[-1] left-0 w-full md:pl-0 pl-6  lg:w-auto transition-all duration-500 ease-in ${
              isMobileMenuOpen ? "top-20" : "top-[-500px]"
            }`}
          >
            <li>
              <SearchInput />
            </li>
            <li className=" md:my-0 md:pl-8 pl-0  my-1 lg:ml-1 flex items-center justify-between">
              <Link href="/">What's New</Link>
            </li>
            {categoryArray.map((category, index) => (
              <li
                key={category.id}
                className="relative group md:my-0 my-7 md:ml-8 cursor-pointer"
                onClick={() => toggleCategoryDropdown(index)}
                onMouseLeave={() => toggleCategoryDropdown(index)}
              >
                <div className="flex  items-center justify-between hover:text-gray-300 active:underline-offset-2">
                  {category.attributes.title}{" "}
                  <ChevronDown className="relative top-1 float-right w-6 h-6  " />
                </div>
                {categoryDropdownOpen[index] && (
                  <ul className="bg-white absolute top-6 left-0 min-w-[200px] px-1 py-1 text-black shadow-lg">
                    <li className="h-12 flex flex-col justify-between items-center px-3 hover:bg-black/[0.03] rounded-md">
                      {renderSubCategories(
                        category.attributes.sub_categories.data
                      )}
                    </li>
                  </ul>
                )}
              </li>
            ))}
            <li
              onClick={() => toggleMoreDropdown(true)}
              onMouseLeave={() => toggleMoreDropdown(false)}
              className="relative group "
            >
              <div className=" my-0 md:ml-8">
                <Link
                  href="/"
                  className="hover:text-gray-500 active:underline-offset-2  flex justify-between items-center"
                >
                  More
                  <ChevronDown className="relative top-1 float-right w-6 h-6  " />
                </Link>
              </div>
              {isMoreDropdownOpen && (
                <div
                  onClick={() => toggleMoreDropdown(true)}
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

            <li className="flex justify-start items-start md:pl-8 pl-0">
              <button className="text-indigo-400 hover:text-indigo-600">
                <a href="#" className="hover:text-gray-700">
                  Login / Register
                </a>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MobileNavigation;
