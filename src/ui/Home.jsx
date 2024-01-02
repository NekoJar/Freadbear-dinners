import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { useUser } from "../features/authentication/useUser";
import bgVideo from "../../public/pizza-video.mp4";
import Header from "./Header";
import { useLogin } from "../features/authentication/useLogin";
import Confetti from "./Confetti";

function Home() {
  const username = useSelector((state) => state.user.username);
  const { user } = useUser();
  const { fullName } = user.user_metadata;
  const { showConfetti } = useLogin();
  return (
    <>
      <div className="my-32 bg-[rgba(255,255,255,0.1)] px-4 text-center sm:my-40 ">
        <div className="absolute inset-0 left-0 top-0 z-[1] w-[100%] bg-[rgba(255,255,255,255,0.1)]"></div>
        <video
          className="absolute inset-0 z-[0] h-[100%] w-[100%] object-fill opacity-100 "
          src={bgVideo}
          autoPlay
          loop
          muted
        />

        <div className="relative z-[2] rounded-3xl p-16 backdrop-blur-sm  backdrop-brightness-200 backdrop-contrast-200 backdrop-saturate-50">
          <h1 className="mb-6 text-xl font-semibold uppercase text-neutral-900 md:text-3xl">
            The best pizza.
            <br />
            <span className="lowercase text-yellow-500">
              Straight out of the oven, straight to you.
            </span>
          </h1>

          <Button to="menu" type="primary">
            Make an Order, {fullName}
          </Button>
        </div>
      </div>
    </>
  );
}

export default Home;
