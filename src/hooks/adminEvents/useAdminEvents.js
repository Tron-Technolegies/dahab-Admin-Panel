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
    refetchOnWindowFocus: false,
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

export const useGetSingleEvent = ({ id }) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ["single-event", id],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/events/${id}`, {
        withCredentials: true,
      });
      return data;
    },
    refetchOnWindowFocus: false,
  });
  return { isLoading, data, isError };
};

export const useDeleteImage = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: deleteImage } = useMutation({
    mutationFn: async ({ imageType, eventId, publicId }) => {
      await axios.patch(
        `${BASE_URL}/events/delete-image`,
        {
          imageType,
          eventId,
          publicId,
        },
        { withCredentials: true }
      );
    },
    onSuccess: (_, variables) => {
      const { eventId } = variables;
      queryClient.invalidateQueries({ queryKey: ["admin-events"] });
      queryClient.invalidateQueries({ queryKey: ["single-event", eventId] });
      toast.success("image removed");
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
  return { isPending, deleteImage };
};

export const useEditEvent = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate: editEvent } = useMutation({
    mutationFn: async ({ data, id }) => {
      await axios.patch(`${BASE_URL}/events/${id}`, data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: (_, variables) => {
      const { id } = variables;
      queryClient.invalidateQueries({ queryKey: ["admin-events"] });
      queryClient.invalidateQueries({ queryKey: ["single-event", id] });
      toast.success("updated successfully");
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
  return { isPending, editEvent };
};

export const useDeleteEvent = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: deleteEvent } = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${BASE_URL}/events/${id}`, { withCredentials: true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["admin-events"] });
      toast.success("Successfully deleted");
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
  return { isPending, deleteEvent };
};
