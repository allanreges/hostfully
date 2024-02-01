import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { LocationsItem } from ".";

describe("BookingsItem component", () => {
  test("renders booking details correctly", () => {
    const location = {
      id: "17fd4f39-79b8-4f54-85f9-483c7665137a",
      location: "New York City, NY",
      price: 200,
      name: "Luxurious Apartment in Manhattan",
      type: "Apartment",
      image: "/src/assets/location-01.jpg",
      reservations: [
        {
          id: "92e1ef26-5598-4cad-bef9-7f085b2ef668",
          startDate: new Date("2024-02-23T03:00:00.000Z"),
          endDate: new Date("2024-02-24T03:00:00.000Z"),
        },
      ],
      details:
        "Spacious and modern apartment in the heart of Manhattan, perfect for a luxurious stay.",
    };

    render(<LocationsItem location={location} />);

    expect(
      screen.getByText("Luxurious Apartment in Manhattan")
    ).toBeInTheDocument();
    expect(screen.getByText("Book")).toBeInTheDocument();
  });
});
