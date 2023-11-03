// import { useMutation, useQueryClient } from "@tanstack/react-query";
// import createMenuOrder from "../../services/apiOrder";

// export function useCreateOrder() {
//   const queryClient = useQueryClient();

//   const { mutate: createOrder, isLoading: isCreating } = useMutation({
//     mutationFn: createMenuOrder,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ["cabins"] });
//     },
//   });

//   return { isCreating, createOrder };
// }
