import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useSignup } from "./useSignup";
import { Form } from "react-router-dom";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup({ fullName, email, password }, { onSettled: () => reset() });
  }

  return (
    <>
      <Form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Fullname
          </label>

          <input
            type="text"
            id="fullName"
            disabled={isLoading}
            {...register("fullName", { required: "this field is required" })}
            className="input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>

          <input
            type="email"
            id="email"
            disabled={isLoading}
            {...register("email", {
              required: "this field is required",
              pattern: { value: /\S+@\S+\.\S+/ },
              message: "Please provide a valid email address",
            })}
            className="input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>

          <input
            type="password"
            id="password"
            disabled={isLoading}
            {...register("password", {
              required: "this field is required",
              minLength: {
                value: 8,
                message: "Password needs a minimum of 8 characters",
              },
            })}
            className="input"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Confirm Password
          </label>

          <input
            type="password"
            id="passwordConfirm"
            disabled={isLoading}
            {...register("passwordConfirm", {
              required: "this field is required",
              validate: (value) =>
                value === getValues().password || "Password need to match",
            })}
            className="input"
          />
        </div>

        <div>
          <Button type="login" disabled={isLoading}>
            Create new user
          </Button>
        </div>
      </Form>
      <div className="mt-4 text-center text-sm text-gray-600">
        <p>
          Already have an account?
          <a href="/login" className="text-black hover:underline">
            {" "}
            Login here
          </a>
        </p>
      </div>
    </>
  );
}

export default SignupForm;
