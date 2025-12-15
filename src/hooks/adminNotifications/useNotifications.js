import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";

export const useGetUnreadNotifications = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["unread-notifications"],
    queryFn: async () => {
      const { data } = await axios.get(
        `${BASE_URL}/admin/notification/unread`,
        { withCredentials: true }
      );
      return data;
    },
    onError: (err) => {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { isLoading, data, error };
};

export const useGetAllNotifications = ({ currentPage, status }) => {
  const { isLoading, data, error, isSuccess } = useQuery({
    queryKey: ["notifications", currentPage, status],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/admin/notification/all`, {
        withCredentials: true,
        params: {
          currentPage,
          status,
        },
      });
      return data;
    },
  });
  return { isLoading, data, error, isSuccess };
};

export const useReadNotification = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: readNotification } = useMutation({
    mutationFn: async (id) => {
      await axios.patch(
        `${BASE_URL}/admin/notification/read`,
        { id },
        { withCredentials: true }
      );
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["unread-notifications"] });
      queryClient.invalidateQueries({
        queryKey: ["notifications"],
        exact: false,
      });
    },
    onError: (err) => {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { isPending, readNotification };
};
