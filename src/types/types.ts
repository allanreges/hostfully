export type Location = {
  id: string;
  location: string;
  price: number;
  name: string;
  type: string;
  reservations: Reservation[];
  image: string;
  details: string;
};

export type Reservation = {
  id: string;
  startDate: Date | undefined;
  endDate: Date | undefined;
};

export type Booking = {
  id: string;
  location: string;
  startDate?: Date;
  dailyPrice: number;
  name: string;
  endDate?: Date;
  price: number;
  image: string;
  numberOfDays: number;
  locationId: string;
};

export type BookModal = {
  open: boolean;
  mode: "create" | "edit" | "reset";
};

export type DateRange = {
  startDate?: Date;
  endDate?: Date;
};

export type Toaster = {
  open: boolean;
  message: string;
};

export type GlobalState = {
  locations: Location[];
  bookings: Booking[];
  bookModal: BookModal;
  activeBooking?: Booking;
  activeLocation?: Location;
  editBooking: (updatedBooking: Booking) => void;
  deleteBooking: (id: string) => void;
  createBooking: (booking: Booking) => void;
  handleModal: (modal: BookModal) => void;
  setActiveBooking: (booking: Booking | undefined) => void;
  setActiveLocation: (location: Location | undefined) => void;
  createReservation: (id: string, reservation: Reservation) => void;
  editReservation: (id: string, updatedReservation: Reservation) => void;
  deleteReservation: (id: string, reservationId: string) => void;
};
