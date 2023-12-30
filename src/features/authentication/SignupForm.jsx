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
    <Form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">Fullname</label>
        <div className="grow">
          <input
            type="text"
            id="fullName"
            disabled={isLoading}
            {...register("fullName", { required: "this field is required" })}
            className="input"
          />
        </div>
      </div>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">Email Address</label>
        <div className="grow">
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
      </div>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">Password</label>
        <div className="grow">
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
      </div>

      <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
        <label className="sm:basis-40">Confirm Password</label>
        <div className="grow">
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
      </div>

      <div className="flex flex-col justify-end gap-4 sm:flex-row sm:gap-0">
        <div className="pr-0 sm:pr-4">
          <Button type="secondary" disabled={isLoading} to="/login">
            Cancel
          </Button>
        </div>
        <Button type="primary" disabled={isLoading}>
          Create new user
        </Button>
      </div>
    </Form>
  );
}

export default SignupForm;
