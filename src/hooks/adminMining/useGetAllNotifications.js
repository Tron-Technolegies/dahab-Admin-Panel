import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetAllNotifications = ({ currentPage }) => {
  const [loading, setLoading] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getNotifications = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/mining/notifications`, {
        withCredentials: true,
        params: { currentPage },
      });
      const data = response.data;
      setNotifications(data.allNotifications);
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
    getNotifications();
  }, []);

  const refetch = () => {
    getNotifications();
  };

  return { loading, refetch, notifications, totalPages };
};

export default useGetAllNotifications;
