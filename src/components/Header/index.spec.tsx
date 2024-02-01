import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import { Header } from ".";

describe("Header component", () => {
  test("renders logo and navigation links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    const logoElement = screen.getByAltText("logo");
    expect(logoElement).toBeInTheDocument();

    const locationsLink = screen.getByTestId("home-link");
    expect(locationsLink).toBeInTheDocument();
    expect(locationsLink).toHaveAttribute("href", "/");

    const bookingsLink = screen.getByTestId("bookings-link");
    expect(bookingsLink).toBeInTheDocument();
    expect(bookingsLink).toHaveAttribute("href", "/bookings");
  });
});
