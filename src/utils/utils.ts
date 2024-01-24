import { Booking } from "@/types/types";

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
