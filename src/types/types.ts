export interface Location {
  id: string;
  location: string;
  price: number;
  name: string;
  type: string;
  reservations?: Reservation[];
  image: string;
  details: string;
}

export interface Reservation {
  id: string;
  startDate: Date;
  endDate: Date;
}

export interface Booking {
  id: string;
  location: string;
  startDate: Date;
  endDate: Date;
  price: number;
  image: string;
  numberOfDays: number;
  locationId: string;
}

export interface GlobalState {
  locations: Location[];
  bookings: Booking[];
  editBooking: (updatedBooking: Booking) => void;
  deleteBooking: (id: string) => void;
  createBooking: (booking: Booking) => void;
}
