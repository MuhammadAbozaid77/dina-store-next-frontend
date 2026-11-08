"use client";
import { getAllProducts } from "@/actions/products-actions";
import { useQuery } from "@tanstack/react-query";

export default function useGetProducts() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["useGetProducts"],
    queryFn: () => getAllProducts(),
  });

  return { data, isLoading, error, refetch };
}
