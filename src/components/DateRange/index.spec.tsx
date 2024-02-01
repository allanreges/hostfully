import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { DateRange } from ".";

describe("DateRange component", () => {
  const setDateRange = jest.fn();
  const overlapError = false;
  const setOverlapError = jest.fn();
  const activeLocation = {
    id: "17fd4f39-79b8-4f54-85f9-483c7665137a",
    location: "New York City, NY",
    price: 200,
    name: "Luxurious Apartment in Manhattan",
    type: "Apartment",
    image: "",
    reservations: [],
    details:
      "Spacious and modern apartment in the heart of Manhattan, perfect for a luxurious stay.",
  };
  it("renders DateRangePicker with correct initial values", () => {
    const dateRange = {
      startDate: new Date("03/15/2024"),
      endDate: new Date("03/20/2024"),
    };

    render(
      <DateRange
        dateRange={dateRange}
        setDateRange={setDateRange}
        overlapError={overlapError}
        setOverlapError={setOverlapError}
        activeLocation={activeLocation}
      />
    );

    const checkInInput = screen.getByDisplayValue("03/15/2024");
    const checkOutInput = screen.getByDisplayValue("03/20/2024");

    expect(checkInInput).toBeInTheDocument();
    expect(checkOutInput).toBeInTheDocument();
  });
});
