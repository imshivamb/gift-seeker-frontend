"use client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

export type Product = {
  id: number;
  attributes: {
    title: string;
    price: number | null;
    description: string;
    createdAt: number;
    link: string;
    image: {
      data: any;
    };
    keywords: string;
    categories: {
      data: Category[];
    };
    sub_categories: {
      data: SubCategory[];
    };
  };
};

export type Category = {
  id: number;
  attributes: {
    title: string;
    products: {
      data: Product[];
    };
    sub_categories: {
      data: SubCategory[];
    };
  };
};

export type SubCategory = {
  id: number;
  attributes: {
    title: string;
    description: string | null;
    image: {
      data: any;
    };
    categories: {
      data: Category[];
    };
    products: {
      data: Product[];
    };
  };
};

interface MyContextValue {
  categories: Category[];
  setCategories: Dispatch<SetStateAction<Category[]>>;
  products: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  subcategories: SubCategory[];
  setSubCategories: Dispatch<SetStateAction<SubCategory[]>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

const MyContext = createContext<MyContextValue | undefined>(undefined);

const initialValue: Category[] = [];
const initialProductValue: Product[] = [];
const initialSubCategoryValue: SubCategory[] = [];
const initialSearchTermValue = "";

export const MyContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [categories, setCategories] = useState<Category[]>(initialValue);
  const [products, setProducts] = useState<Product[]>(initialProductValue);
  const [subcategories, setSubCategories] = useState<SubCategory[]>(
    initialSubCategoryValue
  );
  const [searchTerm, setSearchTerm] = useState<string>(initialSearchTermValue);

  const contextValue: MyContextValue = {
    categories,
    setCategories,
    products,
    setProducts,
    subcategories,
    setSubCategories,
    searchTerm,
    setSearchTerm,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};

export const useMyContext = (): MyContextValue => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
