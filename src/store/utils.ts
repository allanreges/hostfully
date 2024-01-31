import { Booking, Location, Reservation } from "@/types/types";

export const createBooking = (booking: Booking, bookingsState: Booking[]) => {
  return [...bookingsState, booking];
};

export const editBooking = (
  updatedBooking: Booking,
  bookingsState: Booking[]
) => {
  const index = bookingsState.findIndex(booking => {
    return booking.id === updatedBooking.id;
  });
  bookingsState[index] = updatedBooking;
  return bookingsState;
};

export const deleteBooking = (id: string, bookingState: Booking[]) => {
  return bookingState.filter((booking: Booking) => booking.id !== id);
};

export const createReservation = (
  id: string,
  reservation: Reservation,
  locations: Location[]
) => {
  const index = locations.findIndex(location => {
    return location.id === id;
  });
  locations[index].reservations.push(reservation);
  return locations;
};

export const editReservation = (
  locationId: string,
  updatedReservation: Reservation,
  locationsState: Location[]
) => {
  const locationIndex = locationsState.findIndex(location => {
    return location.id === locationId;
  });
  const reservationIndex = locationsState[locationIndex].reservations.findIndex(
    reservation => {
      return reservation.id === updatedReservation.id;
    }
  );
  locationsState[locationIndex].reservations[reservationIndex] =
    updatedReservation;
  return locationsState;
};

export const deleteReservation = (
  locationId: string,
  reservationId: string,
  locationsState: Location[]
) => {
  const locationIndex = locationsState.findIndex(location => {
    return location.id === locationId;
  });
  locationsState[locationIndex].reservations = locationsState[
    locationIndex
  ].reservations.filter(({ id }) => id !== reservationId);
  return locationsState;
};
