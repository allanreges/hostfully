import { create } from "zustand";

import { Booking, GlobalState } from "@/types/types";
import { createBooking, deleteBooking, editBooking } from "@/utils/utils";

import { data } from "./mockData";

export const store = create<GlobalState>()(set => ({
  locations: data,
  bookings: [],
  createBooking: (booking: Booking) =>
    set(state => ({ bookings: createBooking(booking, state.bookings) })),
  editBooking: (updatedBooking: Booking) =>
    set(state => ({ bookings: editBooking(updatedBooking, state.bookings) })),
  deleteBooking: (id: string) =>
    set(state => ({ bookings: deleteBooking(id, state.bookings) })),
}));
