import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useGetEvents = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["admin-events"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/events`);
      return data;
    },
  });
  return { isLoading, data, isError };
};

export const useAddEvent = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate: addEvent } = useMutation({
    mutationFn: async (data) => {
      await axios.post(`${BASE_URL}/events`, data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-events"] });
      toast.success("Event added successfully");
      navigate("/admin/events");
    },
    onError: (error) => {
      toast.error(
        error.response.data.msg || error.message || "something went wrong"
      );
      console.log(
        error.response.data.msg || error.message || "something went wrong"
      );
    },
  });
  return { isPending, addEvent };
};
