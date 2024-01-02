import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";
import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const [isPaid, setIsPaid] = useState(false);

  return (
    <AppContext.Provider value={{ isPaid, setIsPaid }}>
      <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-transparent">
        {isLoading && <Loader />}

        <Header />

        <div className="overflow-scroll bg-yellow-50 scrollbar-hide ">
          <main className=" mx-auto max-w-3xl  ">
            <Outlet />
          </main>
        </div>

        <CartOverview />
      </div>
    </AppContext.Provider>
  );
}

export default AppLayout;
