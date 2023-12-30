import LoginForm from "../features/authentication/LoginForm";
import LoginHeader from "../ui/LoginHeader";

function Login() {
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] overflow-scroll scrollbar-hide">
      <LoginHeader />
      <main className=" mx-auto max-w-3xl ">
        <div className="my-8  px-4">
          <h1 className="mb-16 text-center text-xl font-extrabold uppercase md:text-3xl">
            FREADBEAR'S FAMILY DINER 🍕
            <br />
            <br />
            <span className="text-yellow-500">
              A magical place for kids and grown-ups alike, where fantasy and
              fun come to life.
            </span>
          </h1>

          <p className="mb-4 text-sm text-stone-600 md:text-base">
            👋 Welcome! Please start by fill this form below:
          </p>
          <br />
          <LoginForm />
        </div>
      </main>
    </div>
  );
}

export default Login;
