import { ModeEdit } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button } from "@mui/material";
import dayjs from "dayjs";

import { store } from "@/store/store";
import { Booking } from "@/types/types";

import {
  ButtonsContainer,
  Container,
  ContentContainer,
  DatesContainer,
  DescriptionContainer,
  ImageContainer,
  StyledCard,
  TitleContainer,
} from "../styles";

type BookingsItem = {
  booking: Booking;
};

export const BookingsItem: React.FC<BookingsItem> = ({ booking }) => {
  const {
    handleModal,
    deleteBooking,
    deleteReservation,
    setActiveBooking,
    setActiveLocation,
    locations,
  } = store(state => state);

  const handleDelete = () => {
    deleteReservation(booking.locationId, booking.id);
    deleteBooking(booking.id);
  };

  const getLocation = (id: string) => {
    return locations.find(location => location.id === id);
  };

  const handleEdit = () => {
    const location = getLocation(booking.locationId);
    handleModal({
      open: true,
      mode: "edit",
    });
    setActiveLocation(location);
    setActiveBooking(booking);
  };

  return (
    <StyledCard>
      <Container>
        <ImageContainer>
          <img src={booking.image} alt="booking" />
        </ImageContainer>
        <ContentContainer>
          <TitleContainer>
            <h2>{booking.name}</h2>
          </TitleContainer>
          <DescriptionContainer>
            <h4>Daily Price: ${booking.dailyPrice}</h4>
            <span>Total Price: ${booking.price}</span>
            <p>Number of Days: {booking.numberOfDays}</p>
          </DescriptionContainer>
          <DatesContainer>
            Dates: From <b>{dayjs(booking.startDate).format("DD/MM/YYYY")}</b>{" "}
            to <b>{dayjs(booking.endDate).format("DD/MM/YYYY")}</b>
          </DatesContainer>
          <ButtonsContainer>
            <Button
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              data-testid={`delete-button${booking.locationId}`}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              startIcon={<ModeEdit />}
              data-testid={`edit-button${booking.locationId}`}
              onClick={handleEdit}
            >
              Edit
            </Button>
          </ButtonsContainer>
        </ContentContainer>
      </Container>
    </StyledCard>
  );
};
