import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useAddNewSats = () => {
  const [loading, setLoading] = useState(false);
  const addNewSats = async ({ sats }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/mining/sats`,
        { sats },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("successfully added new data");
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
  return { loading, addNewSats };
};

export default useAddNewSats;
