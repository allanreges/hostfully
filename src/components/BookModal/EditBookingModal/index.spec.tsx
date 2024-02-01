import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import { BookModal } from "@/types/types";

import { EditBookingModal } from ".";

describe("EditBookingModal component", () => {
  test("renders EditBookingModal with correct initial values", () => {
    const activeBooking = {
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
    const activeLocation = {
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
    const dateRange = {
      startDate: new Date("2024-02-01"),
      endDate: new Date("2024-02-05"),
    };
    const handleCloseModal = jest.fn();
    const setIsSuccess = jest.fn();
    const overlapError = false;
    const setOverlapError = jest.fn();
    const setDateRange = jest.fn();
    const bookModal: BookModal = {
      mode: "create",
      open: true,
    };

    render(
      <EditBookingModal
        activeBooking={activeBooking}
        activeLocation={activeLocation}
        dateRange={dateRange}
        handleCloseModal={handleCloseModal}
        setIsSuccess={setIsSuccess}
        overlapError={overlapError}
        setOverlapError={setOverlapError}
        setDateRange={setDateRange}
        bookModal={bookModal}
      />
    );

    const saveButton = screen.getByText("Save");
    expect(saveButton).toBeInTheDocument();

    const cancelButton = screen.getByText("Cancel");
    expect(cancelButton).toBeInTheDocument();
  });
});
