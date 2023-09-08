"use client";

import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useDebounce } from "use-debounce";

const SearchInput = () => {
  const router = useRouter();
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [query] = useDebounce(searchQuery, 500);

  const pathname = usePathname();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();

    const encodedSearchQuery = encodeURI(searchQuery);
    if (query) {
      router.push(`/search?q=${query}`);
    } else {
      router.push("/");
    }
    console.log("query:", encodedSearchQuery);
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  // useEffect(() => {
  //   if (searchQuery.trim() !== "") {
  //     router.push(`/?search=${query}`);
  //   } else {
  //     // If searchQuery is empty, navigate back to the homepage
  //     router.push("/");
  //   }
  // }, [query, router]);

  return (
    <form onSubmit={onSearch}>
      <div className="mr-4 relative  lg:flex hidden items-center text-gray-400 focus-within:text-gray-600">
        <button
          onClick={onSearch}
          className="absolute w-6 h-6 ml-4 text-gray-400 hover:text-gray-600"
        >
          <Search className="w-6 h-6" />
        </button>

        <input
          type="text"
          placeholder="Search..."
          className="py-2 pl-12 px-4 rounded-full border border-indigo-200 hover:outline focus:border-blue-500"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div>
        {/* <button
          onClick={toggleSearchVisibility}
          className={`absolute w-6 h-6 m-3 pb-4 text-xl text-gray-400 hover:text-gray-600 lg:hidden right-4 top-4 ${
            isSearchVisible ? "hidden" : ""
          }`}
        >
          <Search className="w-8 h-8" />
        </button> */}
      </div>
    </form>
  );
};

export default SearchInput;
