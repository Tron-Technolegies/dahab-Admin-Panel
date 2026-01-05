import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import ProductListItem from "../../../components/Admin/Products/ProductListItem";
import { Link } from "react-router-dom";
import Loading from "../../../components/Loading";
import { useGetAllProducts } from "../../../hooks/adminProducts/useProduct";

export default function AdminProductPage() {
  const [keyWord, setKeyWord] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");
  const { isLoading, isError, data } = useGetAllProducts({
    keyWord: debouncedKeyword,
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyWord);
    }, 800);
    return () => {
      clearTimeout(handler);
    };
  }, [keyWord]);
  return (
    <div>
      <div className="flex justify-center md:justify-end">
        <Link
          to={"/admin/products/new"}
          className="flex gap-3 items-center bg-homeBg p-2 rounded-lg text-white hover:bg-blue-500 nav-link"
        >
          Add Product
          <span>
            <FaPlus />
          </span>
        </Link>
      </div>
      <h1 className="md:text-2xl text-lg my-2 text-black">All Products</h1>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <p>Something went wrong</p>
      ) : (
        <div className="my-10">
          <div className="flex flex-col">
            <div className="flex md:gap-2 gap-1 items-center mb-5">
              <input
                type="text"
                placeholder="search"
                value={keyWord}
                onChange={(e) => setKeyWord(e.target.value)}
                className="py-1 px-3 rounded-lg  border border-gray-300 text-gray-900 h-11"
              />
            </div>
          </div>
          {data?.products?.length > 0 &&
            data?.products?.map((x) => (
              <ProductListItem
                key={x._id}
                img={x.productImage}
                name={x.productName}
                id={x._id}
              />
            ))}
          {data.products.length === 0 && (
            <p className="text-lg">No products to show</p>
          )}
        </div>
      )}
    </div>
  );
}
