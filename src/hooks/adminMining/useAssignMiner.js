import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

export const useAssignMiner = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: assign } = useMutation({
    mutationFn: async ({ data }) => {
      await axios.post(`${BASE_URL}/mining/product/assign`, data, {
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["ownedUsers"] });
      toast.success("Miner added successfully");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });
  return { isPending, assign };
};
