import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login as loginApi, loginWithGoogle } from "../../services/apiAuth";
import toast from "react-hot-toast";
import Confetti from "../../ui/Confetti";
import { useState } from "react";

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),
    onSuccess: (user) => {
      queryClient.setQueryData(["user"], user.user);
      toast.success("Login Successful!");

      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log("ERROR", err);
      toast.error("Provided email or password are incorrect");
    },
  });

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle(); // Assuming loginWithGoogle returns a Promise

    } catch (error) {
      console.error("Error during Google login:", error.message);
    }
  };

  return { login, isLoading, handleGoogleLogin};
}
