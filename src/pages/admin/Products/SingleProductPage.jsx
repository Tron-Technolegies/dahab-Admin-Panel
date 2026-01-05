import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductHeader from "../../../components/Admin/Products/SingleProduct/ProductHeader";
import ProductDetails from "../../../components/Admin/Products/SingleProduct/ProductDetails";
import DescriptionBox from "../../../components/Admin/Products/SingleProduct/DescriptionBox";
import FeaturedSection from "../../../components/Admin/Products/SingleProduct/FeaturedSection";
import Loading from "../../../components/Loading";
import CoinTypes from "../../../components/Admin/Products/SingleProduct/CoinTypes";
import DeletePrompt from "../../../components/Admin/Products/SingleProduct/DeletePrompt";
import {
  useDeleteProduct,
  useGetSingleAdminProduct,
} from "../../../hooks/adminProducts/useProduct";

export default function SingleProductPage() {
  const { id } = useParams();
  const { isError, isLoading, data } = useGetSingleAdminProduct({ id });
  const { deleteProduct } = useDeleteProduct();
  const [showDelete, setShowDelete] = useState(false);

  const function1 = async () => {
    setShowDelete(false);
  };
  const function2 = async () => {
    deleteProduct(id);
  };

  return isLoading ? (
    <Loading />
  ) : isError ? (
    <p>something went wrong</p>
  ) : (
    <div className="text-black">
      {showDelete && (
        <DeletePrompt function1={function1} function2={function2} />
      )}
      <ProductHeader
        img={data?.product?.productImage}
        name={data?.product?.productName}
        price={data?.product?.price}
      />
      <ProductDetails
        hash={data?.product?.hashRate}
        power={data?.product?.power}
        algorithm={data?.product?.algorithm}
      />
      <div className="p-5 bg-white mb-2 rounded-lg">
        <p>
          <span className="font-semibold">Manufacturer: </span>{" "}
          {data?.product?.manufacturer}
        </p>
        <p>
          <span className="font-semibold">Category: </span>{" "}
          {data?.product?.productCategory}
        </p>
      </div>

      <CoinTypes list={data?.product?.cryptoCurrency} />
      <p className="font-semibold my-2">Description</p>
      <DescriptionBox desc={data?.product?.description} />
      <p className="font-semibold my-2">Overview</p>
      <div className="bg-btnGreen p-5 rounded-lg">
        <p className=" leading-8">{data?.product?.overview}</p>
      </div>
      <p className="font-semibold my-2">Specs</p>
      <div className="bg-white p-5 rounded-lg">
        {data?.product?.productSpecifications?.map((item) => (
          <div key={item._id} className="flex gap-2 items-center">
            <p className="font-semibold">{item.spec} :</p>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      <p className="font-semibold my-2">FAQ's</p>
      <div className="bg-white p-5 rounded-lg flex flex-col gap-2">
        {data?.product?.productFaq?.map((item) => (
          <div key={item._id} className="flex gap-2 items-center">
            <p className="font-semibold">{item.question} :</p>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
      <p className="font-semibold my-2">Meta Tags</p>
      <div className="bg-white p-5 rounded-md flex flex-col gap-2">
        <p>
          <span className="font-semibold">Slug: </span> {data?.product?.slug}
        </p>
        <p>
          <span className="font-semibold">Meta Title: </span>{" "}
          {data?.product?.metaTitle}
        </p>
        <p>
          <span className="font-semibold">Meta Description: </span>{" "}
          {data?.product?.metaDescription}
        </p>
        <p>
          <span className="font-semibold">Meta Keywords: </span>{" "}
          {data?.product?.metaKeywords}
        </p>
      </div>
      <p className="font-semibold my-2">Product Schema</p>
      <div className="font-mono bg-white p-5">
        {data?.product?.productSchema}
      </div>
      <FeaturedSection
        img={data?.product?.featuredImage}
        name={data?.product?.productName}
        isFeatured={data?.product?.isFeatured}
        id={id}
      />
      <div className="p-5 flex gap-4 justify-end text-black">
        <Link
          to={`/admin/products/${data?.product?._id}/edit`}
          className="p-2 px-5 bg-homeBg text-white rounded-lg hover:bg-blue-500 nav-link"
        >
          Edit
        </Link>
        <button
          className="p-2 px-5 bg-red-700 text-white rounded-lg hover:bg-red-500 nav-link"
          onClick={() => setShowDelete(true)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
