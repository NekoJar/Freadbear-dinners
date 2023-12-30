import LoginForm from "../features/authentication/LoginForm";
import SignupForm from "../features/authentication/SignupForm";
import LoginHeader from "../ui/LoginHeader";

function SignUp() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] overflow-scroll scrollbar-hide">
      <LoginHeader />
      <main className=" mx-auto max-w-3xl ">
        <div className="my-8 px-4">
          <h1 className="mb-16 text-center text-xl font-extrabold uppercase md:text-3xl">
            Sign Up to your account 🍕
            <br />
            <span className="text-yellow-500">
              Fill this form below, to make your account
            </span>
          </h1>

          <SignupForm />
        </div>
      </main>
    </div>
  );
}

export default SignUp;
