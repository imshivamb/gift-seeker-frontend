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
    <form onSubmit={onSearch} className="flex flex-row relative ">
      <input
        type="text"
        placeholder="Search..."
        className="  flex justify-between py-2 pl-12 px-1 lg:px-4 rounded-full border border-indigo-200 hover:outline focus:border-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button
        onClick={onSearch}
        className="absolute lg:right-4 mt-2 ml-2 w-6 h-6 text-gray-400 hover:text-gray-600 "
      >
        <Search className="" />
      </button>
    </form>
  );
};

export default SearchInput;
