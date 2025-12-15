import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useUpdateWalletBalance = () => {
  const [loading, setLoading] = useState(false);
  const updateBalance = async ({ amount, id }) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${BASE_URL}/mining/users/wallet`,
        {
          amount,
          id,
        },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("Balance updated successfully");
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(true);
    }
  };

  return { loading, updateBalance };
};

export default useUpdateWalletBalance;
