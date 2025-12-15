import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const useGetOwnedMiners = ({ currentPage, query }) => {
  const { isLoading, data } = useQuery({
    queryKey: ["ownedUsers", currentPage, query],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/mining/users/owned`, {
        withCredentials: true,
        params: { currentPage, query },
      });
      return data;
    },
    onError: (err) => {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { isLoading, data };
};
