import React, { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  //1. load the authenticated user
  const { isAuthenticated, isLoading } = useUser();

  //2. no authenticated user = redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );

  //3. spinner
  if (isLoading)
    return (
      <FullPage>
        <Loader />
      </FullPage>
    );

  //4 user = render app

  if (isAuthenticated) return children;
};

export default ProtectedRoute;
