import { Button, Modal } from "@mui/material";
import dayjs from "dayjs";

import { DateRange } from "@/components/DateRange";
import { store } from "@/store/store";
import {
  Booking,
  DateRange as DateRangeTypes,
  Location,
  Toaster,
} from "@/types/types";
import { getNumberOfDays, getTotalPrice } from "@/utils/utils";

import {
  ActionsContainer,
  BackgroundImage,
  Container,
  CreateBookingContainer,
  DatesContainer,
  PriceContainer,
} from "../styles";

type EditBookingModal = {
  activeBooking: Booking;
  activeLocation: Location;
  dateRange: DateRangeTypes;
  handleCloseModal: () => void;
  setIsSuccess: ({ open, message }: Toaster) => void;
  overlapError: boolean;
  setOverlapError: (value: boolean) => void;
  setDateRange: ({ startDate, endDate }: DateRangeTypes) => void;
};

export const EditBookingModal: React.FC<EditBookingModal> = ({
  activeBooking,
  activeLocation,
  dateRange,
  handleCloseModal,
  setIsSuccess,
  overlapError,
  setOverlapError,
  setDateRange,
}) => {
  const { handleModal, editBooking, editReservation, bookModal } = store(
    state => state
  );
  console.log(activeBooking);
  const handelEditBooking = () => {
    const booking = {
      ...activeBooking,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
      price: getTotalPrice(
        dateRange.startDate,
        dateRange.endDate,
        activeBooking.dailyPrice
      ),
      numberOfDays: getNumberOfDays(dateRange.startDate, dateRange.endDate),
    };
    const reservation = {
      id: activeBooking.id,
      startDate: dateRange.startDate,
      endDate: dateRange.endDate,
    };
    editBooking(booking);
    editReservation(activeBooking.locationId, reservation);
    handleCloseModal();
    setIsSuccess({
      open: true,
      message: "You have successfully updated your booking",
    });
  };

  return (
    <>
      <Modal open={bookModal.open} onClose={handleModal}>
        <Container data-testid="edit-modal">
          <CreateBookingContainer>
            <h3>
              Edit your Reservation on: <span>{activeBooking.name}</span>
            </h3>
          </CreateBookingContainer>
          <BackgroundImage src={activeBooking.image} alt="location" />
          <DatesContainer>
            <DateRange
              dateRange={{
                startDate: activeBooking?.startDate,
                endDate: activeBooking?.endDate,
              }}
              setDateRange={setDateRange}
              overlapError={overlapError}
              setOverlapError={setOverlapError}
              activeLocation={activeLocation}
            />
          </DatesContainer>
          <PriceContainer>
            <p data-testid="daily-price">
              Daily Price: {activeBooking?.dailyPrice}
            </p>
            <span>
              Total: $
              {dateRange.endDate
                ? getTotalPrice(
                    dateRange.startDate,
                    dateRange.endDate,
                    activeBooking.dailyPrice
                  )
                : activeBooking.price}
            </span>
          </PriceContainer>
          <ActionsContainer>
            <Button onClick={() => handleCloseModal()}>Cancel</Button>
            <Button
              disabled={!dateRange.endDate || overlapError}
              variant="contained"
              onClick={handelEditBooking}
            >
              Save
            </Button>
          </ActionsContainer>
        </Container>
      </Modal>
    </>
  );
};
