import React from "react";
import { loginWithGoogle } from "../services/apiAuth";

const GoogleLoginButton = () => {
  const handleGoogleLogin = async () => {
    await loginWithGoogle();
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="w-full rounded-full bg-black p-4 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-neutral-800 focus:bg-neutral-800 focus:outline-none focus:ring focus:ring-black focus:ring-offset-2 disabled:cursor-not-allowed"
    >
      Login with Google
    </button>
  );
};

export default GoogleLoginButton;
