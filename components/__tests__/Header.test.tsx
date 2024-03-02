import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

describe("Header component", () => {
  test("renders home link", () => {
    render(<Header />);
    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });

  test("renders cart button", () => {
    render(<Header />);
    const cartButton = screen.getByRole("link", { name: /cart/i });
    expect(cartButton).toBeInTheDocument();
  });

  test("renders CartButton component", () => {
    render(<Header />);
    const cartButton = screen.getByTestId("cart-button");
    expect(cartButton).toBeInTheDocument();
  });
});
