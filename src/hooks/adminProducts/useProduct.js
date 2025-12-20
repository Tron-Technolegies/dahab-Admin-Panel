import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useGetAllProducts = ({ keyWord }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["products", keyWord],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/admin/product`, {
        withCredentials: true,
        params: { keyWord },
      });
      return data;
    },
  });
  return { isError, isLoading, data };
};

export const useGetSingleAdminProduct = ({ id }) => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["single-product", id],
    queryFn: async () => {
      const { data } = await axios.get(`${BASE_URL}/admin/product/${id}`, {
        withCredentials: true,
      });
      return data;
    },
  });
  return { isError, isLoading, data };
};

export const useMakeFeatured = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: makeFeatured } = useMutation({
    mutationFn: async ({ id }) => {
      await axios.patch(
        `${BASE_URL}/admin/product/make-featured`,
        { id },
        { withCredentials: true }
      );
    },
    onSuccess: (_, variables) => {
      const { id } = variables;
      queryClient.invalidateQueries({ queryKey: ["single-product", id] });
      toast.success("Product is now featured");
    },
    onError: (err) => {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { isPending, makeFeatured };
};

export const useRemoveFeatured = () => {
  const queryClient = useQueryClient();
  const { isPending, mutate: removeFeatured } = useMutation({
    mutationFn: async ({ id }) => {
      await axios.patch(
        `${BASE_URL}/admin/product/remove-featured`,
        { id },
        { withCredentials: true }
      );
    },
    onSuccess: (_, variables) => {
      const { id } = variables;
      queryClient.invalidateQueries({ queryKey: ["single-product", id] });
      toast.success("Product removed as featured");
    },
    onError: (err) => {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { isPending, removeFeatured };
};
export const useAddProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate: addProduct } = useMutation({
    mutationFn: async (data) => {
      await axios.post(`${BASE_URL}/admin/product/`, data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("Product added successfully");
      navigate("/admin/products");
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.msg || error.message || "something went wrong"
      );
    },
  });
  return { isPending, addProduct };
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate: deleteProduct } = useMutation({
    mutationFn: async (id) => {
      await axios.delete(`${BASE_URL}/admin/product/${id}`, {
        withCredentials: true,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["products"] });
      toast.success("product deleted successfully");
      navigate("/admin/products");
    },
    onError: (err) => {
      toast.error(
        err?.response?.data?.msg || err?.error || "something went wrong"
      );
    },
  });
  return { isPending, deleteProduct };
};

export const useEditProduct = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { isPending, mutate: editProduct } = useMutation({
    mutationFn: async ({ id, data }) => {
      await axios.patch(`${BASE_URL}/admin/product/${id}`, data, {
        withCredentials: true,
        headers: { "Content-Type": "multipart-formdata" },
      });
    },
    onSuccess: (_, variables) => {
      const { id } = variables;
      queryClient.invalidateQueries({ queryKey: ["products"] });
      queryClient.invalidateQueries({ queryKey: ["single-product", id] });
      toast.success("Product updated successfully");
      navigate(`/admin/products/${id}`);
    },
    onError: (error) => {
      toast.error(
        error.response.data.msg || error.message || "something went wrong"
      );
    },
  });
  return { isPending, editProduct };
};
