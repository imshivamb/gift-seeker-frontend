// MobileNavigation.tsx
import React, { useState } from "react";
import { X, Menu, ChevronDown } from "lucide-react";
import { Category, SubCategory } from "@/app/context";
import Link from "next/link";
import SearchInput from "./SearchInput";
import Image from 'next/image';
import logo from "../assets/logo.png";

interface MobileNavigationProps {
  
  
  categories: { [key: number]: Category };
}

const MobileNavigation: React.FC<MobileNavigationProps> = ({
  
  categories,
}) => {
  const categoryArray = Object.values(categories);
  const [isMoreDropdownOpen, setIsMoreDropdownOpen] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMoreDropdown = (open: boolean) => {
    setIsMoreDropdownOpen(!isMoreDropdownOpen);
  };

  const toggleMobileNav = () => {
    setMobileNav(!mobileNav);
  }

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
          className=" hover:text-gray-500 py-2 "
      >
        
          {subCategory.attributes.title}
        
      </Link>
    ));
  };
  return (
    <div className="lg:hidden left-8 top-2 ">
      <button
        
        className=" text-gray-500 hover:text-gray-700 focus:text-gray-700 left-8 top-2  focus:outline-none block"
      >
          
          
          <div onClick={toggleMobileNav} className='lg:hidden px-3'>
          <Menu className="w-12 h-12 left-0 " />
          </div>
      </button>

      
      
      <nav className={mobileNav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={mobileNav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
          'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div>
            <div className='flex w-full items-center justify-between'>
              <Image src={logo} alt='logo' width={150} height={75} />
              <div onClick={toggleMobileNav} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <X className="w-8 h-8 " />
              </div>
            </div>
            <div className='border-b border-gray-300 my-4'>
              <div className='w-[65%] md:w-[75%] '><SearchInput /></div>
            </div>
          </div>
          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href="/">
                <li className='py-3  font-poppins font-bold text-lg'>What's New</li>
              </Link>
              {categoryArray.map((category, index) => (
              <li
                key={category.id}
                className="py-3 text-sm cursor-pointer"
                onClick={() => toggleCategoryDropdown(index)}
                
              >
                <div className="flex  items-center justify-between font-poppins font-bold text-lg hover:text-gray-300 active:underline-offset-2">
                  {category.attributes.title}{" "}
                  <ChevronDown className="relative top-1 float-right w-6 h-6  " />
                </div>
                {categoryDropdownOpen[index] && (
                  <div className="absolute  text-left text-md px-8 space-y-2  text-gray-900">
                  <ul className= "leading-loose whitespace-nowrap font-poppins   font-bold">
                    <li className="h-auto flex flex-col justify-between font-poppins bg-white  font-bold text-lg items-center px-3">
                      {renderSubCategories(
                        category.attributes.sub_categories.data
                      )}
                    </li>
                  </ul>
                  </div>
                )}
              </li>
            ))}
            <li
              onClick={() => toggleMoreDropdown(true)}
              
              className="relative group "
            >
              <div className=" my-0 md:ml-8 font-poppins font-bold text-lg py-3">
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
                  
                  className="absolute  text-left text-md px-8 space-y-2 bg-white text-gray-900"
                >
                  <ul className="leading-loose whitespace-nowrap font-poppins font-bold">
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
              <button className="text-indigo-400 hover:text-indigo-600 font-poppins font-bold text-lg pt-4">
                <a href="#" className="hover:text-gray-700">
                  Login / Register
                </a>
              </button>
            </li>
            </ul>
            
          </div>
        </div>

      </nav>
    </div>
  );
};

export default MobileNavigation;
