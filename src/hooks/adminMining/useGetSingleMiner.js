import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetSingleMiner = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [miner, setMiner] = useState(null);

  const getMiner = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${BASE_URL}/mining/product/miners/${id}`,
        { withCredentials: true }
      );
      const data = response.data;
      setMiner(data);
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMiner();
  }, []);

  return { loading, miner };
};

export default useGetSingleMiner;
