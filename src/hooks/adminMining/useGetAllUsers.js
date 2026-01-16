import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { useQuery } from "@tanstack/react-query";

export const useGetAllUsers = ({ currentPage, keyWord }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["mining-users", currentPage, keyWord],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/mining/users`, {
        withCredentials: true,
        params: { currentPage, keyWord },
      });
      return data;
    },
  });
  return { isError, isLoading, data };
};
