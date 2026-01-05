import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";

export const useGetMinerDropdowns = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["miner-dropdown"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${BASE_URL}/mining/users/miner-dropdown`,
        { withCredentials: true }
      );
      return data;
    },
  });
  return { isLoading, isError, data };
};
