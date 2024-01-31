import { Button, Modal } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

import { DateRange } from "@/components/DateRange";
import { store } from "@/store/store";
import { DateRange as DateRangeTypes, Location, Toaster } from "@/types/types";
import { getNumberOfDays, getTotalPrice } from "@/utils/utils";

import {
  ActionsContainer,
  BackgroundImage,
  Container,
  CreateBookingContainer,
  DatesContainer,
  PriceContainer,
} from "../styles";

type CreateBookingModal = {
  activeLocation: Location;
  dateRange: DateRangeTypes;
  handleCloseModal: () => void;
  setIsSuccess: ({ open, message }: Toaster) => void;
  overlapError: boolean;
  setOverlapError: (value: boolean) => void;
  setDateRange: ({ startDate, endDate }: DateRangeTypes) => void;
};

export const CreateBookingModal: React.FC<CreateBookingModal> = ({
  activeLocation,
  dateRange,
  handleCloseModal,
  setIsSuccess,
  overlapError,
  setOverlapError,
  setDateRange,
}) => {
  const { bookModal, createBooking, createReservation } = store(state => state);
  const handleCreateBooking = () => {
    const booking = {
      id: uuidv4(),
      location: activeLocation.location,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      dailyPrice: activeLocation.price,
      name: activeLocation.name,
      price: getTotalPrice(
        dateRange.startDate,
        dateRange.endDate,
        activeLocation.price
      ),
      image: activeLocation?.image,
      numberOfDays: getNumberOfDays(dateRange.startDate, dateRange.endDate),
      locationId: activeLocation?.id,
    };

    createBooking(booking);
    createReservation(activeLocation.id, {
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      id: booking.id,
    });
    handleCloseModal();
    setIsSuccess({
      open: true,
      message:
        "You have successfully created a booking, you can check your bookings under the My Bookings Menu",
    });
  };
  return (
    <>
      <Modal open={bookModal.open} onClose={handleCloseModal}>
        <Container data-testid="create-modal">
          <CreateBookingContainer>
            <h3>
              Book your reservation on: <span>{activeLocation.name}</span>
            </h3>
          </CreateBookingContainer>
          <BackgroundImage src={activeLocation.image} alt="location" />
          <DatesContainer>
            <DateRange
              dateRange={dateRange}
              setDateRange={setDateRange}
              overlapError={overlapError}
              setOverlapError={setOverlapError}
              activeLocation={activeLocation}
            />
          </DatesContainer>
          <PriceContainer>
            <p data-testid="daily-price">Daily Price: {activeLocation.price}</p>
            <span>
              Total: $
              {getTotalPrice(
                dateRange.startDate,
                dateRange.endDate,
                activeLocation.price
              )}
            </span>
          </PriceContainer>
          <ActionsContainer>
            <Button onClick={() => handleCloseModal()}>Cancel</Button>
            <Button
              disabled={!dateRange.endDate || overlapError}
              variant="contained"
              data-testid="save-button"
              onClick={handleCreateBooking}
            >
              Save
            </Button>
          </ActionsContainer>
        </Container>
      </Modal>
    </>
  );
};
