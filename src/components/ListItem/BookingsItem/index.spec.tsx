import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { BookingsItem } from ".";

describe("BookingsItem component", () => {
  test("renders booking details correctly", () => {
    const booking = {
      id: "92e1ef26-5598-4cad-bef9-7f085b2ef668",
      location: "New York City, NY",
      startDate: new Date("2024-02-23T03:00:00.000Z"),
      endDate: new Date("2024-02-24T03:00:00.000Z"),
      dailyPrice: 200,
      name: "Luxurious Apartment in Manhattan",
      price: 400,
      image: "/src/assets/location-01.jpg",
      numberOfDays: 2,
      locationId: "17fd4f39-79b8-4f54-85f9-483c7665137a",
    };

    render(<BookingsItem booking={booking} />);

    expect(
      screen.getByText("Luxurious Apartment in Manhattan")
    ).toBeInTheDocument();
    expect(screen.getByText("23/02/2024")).toBeInTheDocument();
    expect(screen.getByText("24/02/2024")).toBeInTheDocument();
  });
});
