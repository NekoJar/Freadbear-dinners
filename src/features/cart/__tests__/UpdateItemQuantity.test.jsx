// src/features/cart/__tests__/UpdateItemQuantity.test.jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import UpdateItemQuantity from "../UpdateItemQuantity";

const mockStore = configureStore();

test("renders UpdateItemQuantity component", () => {
  const store = mockStore({}); // Provide your initial state if needed
  render(
    <Provider store={store}>
      <UpdateItemQuantity pizzaId={1} currentQuantity={3} />
    </Provider>,
  );
  expect(screen.getByText("-")).toBeInTheDocument();
  expect(screen.getByText("+")).toBeInTheDocument();
});
