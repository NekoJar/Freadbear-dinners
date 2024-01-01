import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";
import Logout from "../features/authentication/Logout";
import { useUser } from "../features/authentication/useUser";

function Header() {
  const { user } = useUser();
  const { fullName } = user.user_metadata;
  return (
    <header className="relative z-10 flex items-center justify-around  bg-yellow-400 px-4 py-4 uppercase sm:px-6">
      <Link to="/" className="hidden tracking-widest md:block">
        Freadbear's Family Diner Co.
      </Link>
      <SearchOrder />
      <span className="hidden text-sm font-semibold md:block">{fullName}</span>
      <Logout />
    </header>
  );
}

export default Header;
