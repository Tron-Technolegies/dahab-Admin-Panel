import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

const useDownloadCSV = () => {
  const [loading, setLoading] = useState(false);
  const downloadCSV = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/admin/data/download-csv`, {
        withCredentials: true,
        responseType: "blob",
      });
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "inventory.csv");
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error("Error downloading CSV:", error);
      toast.error("Error downloading CSV");
    } finally {
      setLoading(false);
    }
  };

  return { loading, downloadCSV };
};

export default useDownloadCSV;
