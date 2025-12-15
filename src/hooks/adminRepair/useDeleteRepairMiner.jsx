import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useDeleteRepairMiner = () => {
  const [loading, setLoading] = useState(false);

  const deleteMiner = async ({ id }) => {
    setLoading(true);
    try {
      const response = await axios.delete(
        `${BASE_URL}/admin/repair/delete/${id}`,
        {
          withCredentials: true,
        }
      );
      const data = response.data;
      if (data.msg === "success") {
        toast.success("Removed successfully");
      }
    } catch (err) {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return { loading, deleteMiner };
};

export default useDeleteRepairMiner;
