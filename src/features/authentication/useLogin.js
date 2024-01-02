import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import Confetti from "../../ui/Confetti";
import { useState } from "react";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const [showConfetti, setShowConfetti] = useState(false);

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Login Successful!");
      setShowConfetti(true);
      navigate("/menu", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  return { login, isLoading, showConfetti };
}
