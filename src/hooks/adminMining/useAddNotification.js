import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useAddNotification = () => {
  const [loading, setLoading] = useState(false);
  const addNew = async ({ message }) => {
    setLoading(true);
    try {
      const response = await axios.post(
        `${BASE_URL}/mining/notifications`,
        { message },
        { withCredentials: true }
      );
      const data = response.data;
      toast.success("successfully added notifications");
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
  return { loading, addNew };
};

export default useAddNotification;
