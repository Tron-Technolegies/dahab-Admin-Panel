import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useSetPriority = () => {
  const [loading, setLoading] = useState(false);
  const setPriority = async ({ id, priority }) => {
    setLoading(true);
    try {
      const response = await axios.patch(
        `${BASE_URL}/admin/repair/set-priority/${id}`,
        { priority },
        { withCredentials: true }
      );
      const data = response.data;
      if (data.msg === "success") {
        toast.success("priority successfully setup");
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, setPriority };
};

export default useSetPriority;
