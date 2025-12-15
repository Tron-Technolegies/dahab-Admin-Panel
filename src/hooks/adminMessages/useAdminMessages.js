import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

export const useGetMessageGroups = ({ currentPage, query }) => {
  const { isLoading, isError, error, isSuccess, data } = useQuery({
    queryKey: ["message-groups", currentPage, query],
    queryFn: async () => {
      const { data } = await axios.get(
        `${BASE_URL}/admin/messages/message-groups`,
        { withCredentials: true, params: { currentPage, query } }
      );
      return data;
    },
  });
  return { isLoading, isError, error, isSuccess, data };
};

export const useSendMessage = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: sendMessage } = useMutation({
    mutationFn: async ({ message, issueGroup }) => {
      await axios.post(
        `${BASE_URL}/admin/messages/send`,
        {
          message,
          issueGroup,
        },
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["message-groups"],
        exact: false,
      });
    },
    onError: (err) => {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { isPending, sendMessage };
};
