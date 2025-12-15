import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetAllRevenue = ({ currentPage, category }) => {
  const [loading, setLoading] = useState(false);
  const [revenues, setRevenues] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getRevenues = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/mining/revenue`, {
        withCredentials: true,
        params: { currentPage, category },
      });
      const data = response.data;
      setRevenues(data.revenues);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getRevenues();
  }, []);
  const refetch = async () => {
    await getRevenues();
  };

  return { loading, revenues, refetch, totalPages };
};

export default useGetAllRevenue;
