import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetAllMiners = () => {
  const [loading, setLoading] = useState(false);
  const [miners, setMiners] = useState([]);

  const getMiners = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/mining/product/miners`, {
        withCredentials: true,
      });
      const data = response.data;
      setMiners(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMiners();
  }, []);

  const refetch = () => {
    getMiners();
  };

  return { loading, miners, refetch };
};

export default useGetAllMiners;
