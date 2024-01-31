import { Info } from "@mui/icons-material";

import { store } from "@/store/store";

import { BookingsItem } from "../ListItem/BookingsItem";
import { LocationsItem } from "../ListItem/LocationsItem";
import { Container, EmptyStateContainer } from "./styles";

type Props = {
  type: "locations" | "bookings";
};

export const List = ({ type }: Props) => {
  const { locations, bookings } = store(state => state);

  if (type === "locations") {
    return (
      <Container data-testid="home-list">
        {locations.map(location => (
          <LocationsItem key={location.id} location={location} />
        ))}
      </Container>
    );
  }

  if (type === "bookings") {
    return (
      <Container data-testid="bookings-list">
        {bookings.length > 0 ? (
          bookings.map(booking => (
            <BookingsItem
              key={booking.id}
              booking={booking}
              data-testid={`booking item${booking.locationId}`}
            />
          ))
        ) : (
          <EmptyStateContainer data-testid="empty-bookings-list">
            <Info fontSize="large" />
            <h2>
              {`It seems you don't have bookings yet, please check this page once
              you have added a booking`}
            </h2>
          </EmptyStateContainer>
        )}
      </Container>
    );
  }

  return <></>;
};
