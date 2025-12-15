import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetSingleProduct = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const getProduct = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${BASE_URL}/users/product/${id}`);
      const data = res.data;
      if (data.msg === "success") {
        setProduct(data.product);
      } else {
        console.log(data.msg);
      }
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  const refetch = () => {
    getProduct();
  };

  return { loading, product, refetch };
};

export default useGetSingleProduct;
