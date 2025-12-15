import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetUptime = () => {
  const [loading, setLoading] = useState(false);
  const [uptime, setUptime] = useState(null);

  const getUptime = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/mining/sats/uptime`, {
        withCredentials: true,
      });
      const data = response.data;
      setUptime(data.uptime);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUptime();
  }, []);

  const refetch = () => {
    getUptime();
  };

  return { loading, uptime, refetch };
};

export default useGetUptime;
