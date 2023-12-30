import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function LoginHeader() {
  return (
    <header className="flex items-center justify-center border-b border-stone-200 bg-yellow-400 px-6 py-8 uppercase sm:px-6 md:py-8">
      <h1 to="/" className="tracking-widest">
        Freadbear's Family Diner Co.
      </h1>
    </header>
  );
}

export default LoginHeader;
