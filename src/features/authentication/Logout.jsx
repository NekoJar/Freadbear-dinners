import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

const Logout = () => {
  const { logout, isLoading } = useLogout();

  return (
    <button className="" disabled={isLoading} onClick={logout}>
      {!isLoading ? (
        <HiArrowRightOnRectangle className="h-6 w-6" />
      ) : (
        <SpinnerMini />
      )}
    </button>
  );
};

export default Logout;
