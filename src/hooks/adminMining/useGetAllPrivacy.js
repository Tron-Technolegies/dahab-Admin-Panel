import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetAllPrivacy = () => {
  const [loading, setLoading] = useState(false);
  const [policies, setPolicies] = useState([]);

  const getPolicies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/mining/terms/privacy`, {
        withCredentials: true,
      });
      const data = response.data;
      setPolicies(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPolicies();
  }, []);

  const refetch = () => {
    getPolicies();
  };

  return { loading, policies, refetch };
};

export default useGetAllPrivacy;
