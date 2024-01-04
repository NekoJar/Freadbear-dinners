import LoginForm from "../features/authentication/LoginForm";
import SignupForm from "../features/authentication/SignupForm";
import LoginHeader from "../ui/LoginHeader";
import bgVideo from "../../public/pizza-video-2.mp4";
import Logo from "../../public/FazEnt_logo.png";

function SignUp() {
  return (
    <div className="flex h-screen">
      <div className="bg-[rgba(0,0,0,0.2 )] hidden flex-1 items-center  justify-center text-black lg:flex">
        <div className="max-w-md text-center">
          <video
            className="absolute inset-0 z-[-1] h-[100%] w-[100%] object-cover"
            src={bgVideo}
            autoPlay
            loop
            muted
          />
        </div>
      </div>

      <div className="flex w-full items-center justify-center bg-yellow-50 lg:w-1/2">
        <div className="sm:-pt-12 w-full max-w-md px-6 py-1 sm:px-6 sm:pb-12">
          <div className="justify-cen  flex flex-col items-center p-4 sm:p-6">
            <img
              className="h-[100px] w-[100px] sm:h-[100px] sm:w-[100px]"
              src={Logo}
              alt="Logo"
            />
          </div>
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
