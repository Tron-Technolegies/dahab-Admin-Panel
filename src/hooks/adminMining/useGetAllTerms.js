import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetAllTerms = () => {
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  const getTerms = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/mining/terms`, {
        withCredentials: true,
      });
      const data = response.data;
      setItems(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getTerms();
  }, []);

  const refetch = () => {
    getTerms();
  };

  return { loading, refetch, items };
};

export default useGetAllTerms;
