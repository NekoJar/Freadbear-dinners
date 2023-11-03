import { useQuery } from "@tanstack/react-query";

import { getOrder } from "../../services/apiOrder";

export function useOrder() {
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrder,
  });

  return { isLoading, error, orders };
}
