import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetAllPayouts = ({ currentPage }) => {
  const [loading, setLoading] = useState(false);
  const [payouts, setPayouts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getPayouts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/mining/payout`, {
        withCredentials: true,
        params: { currentPage },
      });
      const data = response.data;
      setPayouts(data.payouts);
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
    getPayouts();
  }, []);

  const refetch = async () => {
    await getPayouts();
  };

  return { loading, payouts, refetch, totalPages };
};

export default useGetAllPayouts;
