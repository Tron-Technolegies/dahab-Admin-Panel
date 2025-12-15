import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useAddRevenue = () => {
  const [loading, setLoading] = useState(false);
  const addRevenue = async ({ amount, hashRate, category, uptime }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/mining/revenue`,
        { amount, hashRate, category, uptime },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("successfully added data");
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  return { loading, addRevenue };
};

export default useAddRevenue;
