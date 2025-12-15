import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useAddTerms = () => {
  const [loading, setLoading] = useState(false);
  const addTerms = async ({ version, content }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/mining/terms`,
        { version, content },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("successfully added terms and conditions");
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
  return { loading, addTerms };
};

export default useAddTerms;
