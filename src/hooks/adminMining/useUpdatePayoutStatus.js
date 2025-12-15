import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useUpdatePayoutStatus = () => {
  const [loading, setLoading] = useState(false);

  const updatePayout = async ({ status, id, amount, userId }) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${BASE_URL}/mining/payout`,
        { status, id, amount, userId },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("updated successfully");
    } catch (error) {
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

  return { loading, updatePayout };
};

export default useUpdatePayoutStatus;
