import { useState } from "react";
import Button from "../../ui/Button";

import Input from "../../ui/Input";
import FormRowVertical from "../../ui/FormRowVertical";

import { useLogin } from "./useLogin";
import SpinnerMini from "../../ui/SpinnerMini";
import { Form } from "react-router-dom";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, isLoading } = useLogin();

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
    <Form onSubmit={handleSubmit}>
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">Email Address</label>
        <div className="grow">
          <input
            type="email"
            id="email"
            // This makes this form better for password managers
            autoComplete="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading}
            className="input"
          />
        </div>
      </div>
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">Password</label>
        <div className="grow">
          <input
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={isLoading}
            className="input"
          />
        </div>
      </div>
      <div className=" mt-12 flex flex-col justify-end gap-4 space-x-0 sm:flex-row sm:space-x-4">
        <Button to="/signup" type="signup">
          Sign Up
        </Button>
        <Button type="login" disabled={isLoading}>
          {!isLoading ? "Log in" : <SpinnerMini />}
        </Button>
      </div>
    </Form>
  );
}

export default LoginForm;
