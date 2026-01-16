import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

export const useSettleBalance = () => {
  const queryClient = useQueryClient();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async ({ id }) => {
      await axios.patch(
        `${BASE_URL}/mining/users/deduct`,
        { userId: id },
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mining-users"] });
      toast.success("Deduction completed");
    },
    onError: (error) => {
      toast.error(
        error.response.data.error ||
          error.response.data.msg ||
          error.response.data.message ||
          "something went wrong"
      );
    },
  });
  return { isPending, mutateAsync };
};
