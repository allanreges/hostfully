import { create } from "zustand";
import { persist } from "zustand/middleware";

import {
  createBooking,
  createReservation,
  deleteBooking,
  deleteReservation,
  editBooking,
  editReservation,
} from "@/store/utils";
import {
  Booking,
  BookModal,
  GlobalState,
  Location,
  Reservation,
} from "@/types/types";

import { data } from "./mockData";

export const store = create<GlobalState>()(
  persist(
    set => ({
      locations: data,
      bookings: [],
      bookModal: {
        open: false,
        mode: "reset",
      },
      activeBooking: undefined,
      activeLocation: undefined,
      createBooking: (booking: Booking) =>
        set(state => ({ bookings: createBooking(booking, state.bookings) })),
      editBooking: (updatedBooking: Booking) =>
        set(state => ({
          bookings: editBooking(updatedBooking, state.bookings),
        })),
      deleteBooking: (id: string) =>
        set(state => ({ bookings: deleteBooking(id, state.bookings) })),
      handleModal: (modal: BookModal) => set(() => ({ bookModal: modal })),
      setActiveBooking: (booking: Booking | undefined) =>
        set(() => ({ activeBooking: booking })),
      setActiveLocation: (location: Location | undefined) =>
        set(() => ({ activeLocation: location })),
      createReservation: (id: string, reservation: Reservation) =>
        set(state => ({
          locations: createReservation(id, reservation, state.locations),
        })),
      editReservation: (locationId: string, updatedReservation: Reservation) =>
        set(state => ({
          locations: editReservation(
            locationId,
            updatedReservation,
            state.locations
          ),
        })),
      deleteReservation: (locationId: string, reservationId: string) =>
        set(state => ({
          locations: deleteReservation(
            locationId,
            reservationId,
            state.locations
          ),
        })),
    }),
    {
      name: "bookings",
    }
  )
);
