import { Booking } from "@/types/types";

import {
  createBooking,
  createReservation,
  deleteBooking,
  deleteReservation,
  editBooking,
  editReservation,
} from "./utils";

const mockEmptyBookingsState: Booking[] = [];

const mockBooking = {
  id: "ca1b56ad-9d4c-4e22-ba46-8f93f8f24e3a",
  location: "Los Angeles, CA",
  startDate: new Date("2024-03-19T03:00:00.000Z"),
  endDate: new Date("2024-03-22T03:00:00.000Z"),
  dailyPrice: 150,
  name: "Cozy House in Hollywood Hills",
  price: 600,
  image: "/src/assets/location-02.jpg",
  numberOfDays: 4,
  locationId: "b8723f2d-6d0c-42f6-8b86-d0a35189e6d7",
};

const mockUpdateBooking = {
  id: "ca1b56ad-9d4c-4e22-ba46-8f93f8f24e3a",
  location: "Los Angeles, CA",
  startDate: new Date("2024-02-19T03:00:00.000Z"),
  endDate: new Date("2024-02-22T03:00:00.000Z"),
  dailyPrice: 150,
  name: "Cozy House in Hollywood Hills",
  price: 600,
  image: "/src/assets/location-02.jpg",
  numberOfDays: 4,
  locationId: "b8723f2d-6d0c-42f6-8b86-d0a35189e6d7",
};

const mockWrongIdUpdateBooking = {
  id: "123",
  location: "Los Angeles, CA",
  startDate: new Date("2024-02-19T03:00:00.000Z"),
  endDate: new Date("2024-02-22T03:00:00.000Z"),
  dailyPrice: 150,
  name: "Cozy House in Hollywood Hills",
  price: 600,
  image: "/src/assets/location-02.jpg",
  numberOfDays: 4,
  locationId: "b8723f2d-6d0c-42f6-8b86-d0a35189e6d7",
};

const mockBookingsStateWithData = [
  {
    id: "ca1b56ad-9d4c-4e22-ba46-8f93f8f24e3a",
    location: "Los Angeles, CA",
    startDate: new Date("2024-03-19T03:00:00.000Z"),
    endDate: new Date("2024-03-22T03:00:00.000Z"),
    dailyPrice: 150,
    name: "Cozy House in Hollywood Hills",
    price: 600,
    image: "/src/assets/location-02.jpg",
    numberOfDays: 4,
    locationId: "b8723f2d-6d0c-42f6-8b86-d0a35189e6d7",
  },
];

const mockReservation = {
  startDate: new Date("2024-03-19T03:00:00.000Z"),
  endDate: new Date("2024-03-22T03:00:00.000Z"),
  id: "ca1b56ad-9d4c-4e22-ba46-8f93f8f24e3a",
};

const mockUpdatedReservation = {
  startDate: new Date("2024-06-19T03:00:00.000Z"),
  endDate: new Date("2024-06-22T03:00:00.000Z"),
  id: "ca1b56ad-9d4c-4e22-ba46-8f93f8f24e3a",
};

const mockLocations = [
  {
    id: "17fd4f39-79b8-4f54-85f9-483c7665137a",
    location: "New York City, NY",
    price: 200,
    name: "Luxurious Apartment in Manhattan",
    type: "Apartment",
    image: "",
    reservations: [],
    details:
      "Spacious and modern apartment in the heart of Manhattan, perfect for a luxurious stay.",
  },
];

const mockLocationsWithReservation = [
  {
    id: "17fd4f39-79b8-4f54-85f9-483c7665137a",
    location: "New York City, NY",
    price: 200,
    name: "Luxurious Apartment in Manhattan",
    type: "Apartment",
    image: "",
    reservations: [
      {
        startDate: new Date("2024-03-19T03:00:00.000Z"),
        endDate: new Date("2024-03-22T03:00:00.000Z"),
        id: "ca1b56ad-9d4c-4e22-ba46-8f93f8f24e3a",
      },
    ],
    details:
      "Spacious and modern apartment in the heart of Manhattan, perfect for a luxurious stay.",
  },
];

describe("it should add a booking to the bookings list", () => {
  it("should return an object that has the new booking", () => {
    expect(createBooking(mockBooking, mockEmptyBookingsState)).toContain(
      mockBooking
    );
  });
});

describe("it should update a booking from the bookings list", () => {
  it("should return an object width the updated booking", () => {
    expect(editBooking(mockUpdateBooking, mockBookingsStateWithData)).toEqual([
      mockUpdateBooking,
    ]);
  });

  it("should return an object with the data unchanged because a wrong ID was sent", () => {
    expect(
      editBooking(mockWrongIdUpdateBooking, mockBookingsStateWithData)
    ).toEqual(mockBookingsStateWithData);
  });
});

describe("it should delete a booking from the bookings list", () => {
  it("should return an empty list", () => {
    expect(
      deleteBooking(mockBooking.id, mockBookingsStateWithData)
    ).toHaveLength(0);
  });

  it("should return same list because wrong id was sent", () => {
    expect(deleteBooking("123", mockBookingsStateWithData)).toContain(
      mockUpdateBooking
    );
  });
});

describe("it should add a reservation to the proper location", () => {
  it("should return a location that has the new reservation", () => {
    expect(
      createReservation(
        "17fd4f39-79b8-4f54-85f9-483c7665137a",
        mockReservation,
        mockLocations
      )
    ).toEqual(mockLocationsWithReservation);
  });
});

describe("it should edit a reservation under the proper location", () => {
  it("should update the reservation", () => {
    const edit = editReservation(
      "17fd4f39-79b8-4f54-85f9-483c7665137a",
      mockUpdatedReservation,
      mockLocationsWithReservation
    );
    expect(edit[0]).toEqual(
      expect.objectContaining({
        reservations: expect.objectContaining([mockUpdatedReservation]),
      })
    );
  });
});

describe("it delete a reservation under the proper locaiton", () => {
  it("should delete the reservation", () => {
    const updatedLocations = deleteReservation(
      "17fd4f39-79b8-4f54-85f9-483c7665137a",
      "ca1b56ad-9d4c-4e22-ba46-8f93f8f24e3a",
      mockLocationsWithReservation
    );
    expect(updatedLocations[0]).toEqual(
      expect.objectContaining({
        reservations: expect.objectContaining([]),
      })
    );
  });
});
