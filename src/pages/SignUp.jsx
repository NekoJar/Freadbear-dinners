import LoginForm from "../features/authentication/LoginForm";
import SignupForm from "../features/authentication/SignupForm";
import LoginHeader from "../ui/LoginHeader";
import bgVideo from "../../public/pizza-video-2.mp4";

function SignUp() {
  return (
    <div class="flex h-screen">
      <div class="hidden flex-1 items-center justify-center bg-[rgba(255,255,255,0.3)] text-black lg:flex">
        <div class="max-w-md text-center">
          <video
            className="absolute inset-0 z-[-1] h-[100%] w-[100%] object-cover"
            src={bgVideo}
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      <div class="flex w-full items-center justify-center bg-yellow-50 lg:w-1/2">
        <div class="w-full max-w-md p-6">
          <h1 className="mb-6 text-center text-3xl font-semibold text-black">
            Sign Up
          </h1>
          <h1 className="mb-6 text-center text-sm font-semibold text-gray-500">
            Join to Our Community with all time access and free{" "}
          </h1>

          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default SignUp;
