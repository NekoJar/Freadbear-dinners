import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";
import { useUser } from "../features/authentication/useUser";
import bgVideo from "../../public/pizza-video.mp4";
import Header from "./Header";

function Home() {
  const username = useSelector((state) => state.user.username);
  const { user } = useUser();
  const { fullName } = user.user_metadata;
  return (
    <>
      <div className="my-32 bg-[rgba(255,255,255,0.1)] px-4 text-center sm:my-40">
        <div className="absolute inset-0 left-0 top-0 z-[1] w-[100%] bg-[rgba(255,255,255,0.3)]"></div>
        <video
          className="absolute inset-0 z-[-0] h-[100%] w-[100%] object-cover"
          src={bgVideo}
          autoPlay
          loop
          muted
        />
        <div className="bg-[rgba(255,255,255,0.1) ] relative z-[2]  rounded-lg border border-yellow-500 p-16 backdrop-blur-[8px]">
          <h1 className="mb-8 text-xl font-semibold md:text-3xl">
            The best pizza.
            <br />
            <span className="text-yellow-400">
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
