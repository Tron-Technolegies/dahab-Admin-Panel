import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../utils/constants";

const useGetAllUsers = ({ currentPage, keyWord }) => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  const getAllUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/mining/users`, {
        withCredentials: true,
        params: { currentPage, keyWord },
      });
      const data = response.data;
      setUsers(data.users);
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
    getAllUsers();
  }, []);

  const refetch = () => {
    getAllUsers();
  };

  return { loading, users, totalPages, refetch };
};

export default useGetAllUsers;
