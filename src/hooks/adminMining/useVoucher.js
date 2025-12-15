import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useCreateVoucher = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createVoucher, isPending } = useMutation({
    mutationFn: async ({ data }) =>
      await axios.post(`${BASE_URL}/mining/voucher`, data, {
        withCredentials: true,
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
      toast.success("successfully added voucher");
      navigate("/admin/mining");
    },
    onError: (err) => {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { createVoucher, isPending };
};

export const useGetAllVouchers = () => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["vouchers"],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/mining/voucher`, {
        withCredentials: true,
      });
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

export const useGetSingleVoucher = (id) => {
  const { isLoading, data, error } = useQuery({
    queryKey: ["voucher", id],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/mining/voucher/${id}`, {
        withCredentials: true,
      });
      return data;
    },
    enabled: !!id,
    onError: (err) => {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { isLoading, data, error };
};

export const useEditVoucher = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: editVoucher, isPending } = useMutation({
    mutationFn: async ({ data, id }) => {
      await axios.patch(`${BASE_URL}/mining/voucher/${id}`, data, {
        withCredentials: true,
      });
    },
    onSuccess: (_, variables) => {
      const { id } = variables;
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
      queryClient.invalidateQueries({ queryKey: ["voucher", id] });
      toast.success("updated successfully");
      navigate("/admin/mining");
    },
    onError: (err) => {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { editVoucher, isPending };
};
// export const useDeleteTask = () => {
//   const queryClient = useQueryClient();
//   const { mutate: deleteTask, isPending } = useMutation({
//     mutationFn: async (itemId) => {
//       await customFetch.delete(`/${itemId}`);
//     },
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["tasks"] });
//     },
//   });
//   return { isPending, deleteTask };
// };

export const useDeleteVoucher = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate: deleteVoucher } = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${BASE_URL}/mining/voucher/${id}`, {
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
      navigate("/admin/mining");
      toast.success("Coupon deleted successfully");
    },
    onError: (err) => {
      console.log(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { deleteVoucher, isPending };
};
