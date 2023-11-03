import { useQuery } from "@tanstack/react-query";
import { getMenu } from "../../services/apiMenus";

export function useMenus() {
  const {
    isLoading,
    data: menus,
    error,
  } = useQuery({
    queryKey: ["menus"],
    queryFn: getMenu,
  });

  return { isLoading, error, menus };
}
