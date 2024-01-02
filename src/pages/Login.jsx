import LoginForm from "../features/authentication/LoginForm";
import LoginHeader from "../ui/LoginHeader";
import bgVideo from "../../public/pizza-video-2.mp4";

function Login() {
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
        <div className="w-full max-w-md p-6">
          <h1 className="mb-6 text-center text-3xl font-semibold text-black">
            Sign In
          </h1>
          <h1 className="mb-6 text-center text-sm font-semibold text-gray-500">
            Join to Our Community with all time access and free{" "}
          </h1>
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
