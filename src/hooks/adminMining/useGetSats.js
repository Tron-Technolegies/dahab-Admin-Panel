import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";
import { useDispatch } from "react-redux";
import { setSats } from "../../slices/adminSlice";

const useGetSats = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const getSats = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/mining/sats`, {
        withCredentials: true,
      });
      const data = response.data;

      if (data.length > 0) {
        dispatch(setSats(data[0].satPerDay));
      }
    } catch (err) {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSats();
  }, []);

  const refetch = () => {
    getSats();
  };

  return { loading, refetch };
};

export default useGetSats;
