import { useState } from "react";
import Button from "../../ui/Button";

import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";

import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { Form } from "react-router-dom";
import Confetti from "../../ui/Confetti";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading, showConfetti } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setPassword("");
        },
      },
    );
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="input mt-1 w-full p-2 "
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="input mt-1 w-full p-2"
          />
        </div>
        <div>
          <Button type="login" disabled={isLoading}>
            {!isLoading ? "Log in" : <SpinnerMini />}
          </Button>
        </div>
      </Form>
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>
          Still haven't created an account?
          <a href="/signup" className="text-black hover:underline">
            {" "}
            Sign up here
          </a>
        </p>
      </div>
    </>
  );
}

export default LoginForm;
