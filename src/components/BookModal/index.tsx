import { Alert, Snackbar } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

import { store } from "@/store/store";
import { DateRange as DateRangeTypes, Toaster } from "@/types/types";

import { CreateBookingModal } from "./CreateBookingModal";
import { EditBookingModal } from "./EditBookingModal";

export const BookModal = () => {
  const {
    handleModal,
    activeLocation,
    activeBooking,
    setActiveBooking,
    setActiveLocation,
  } = store(state => state);
  const [dateRange, setDateRange] = useState<DateRangeTypes>({
    startDate: undefined,
    endDate: undefined,
  });

  const [isSuccess, setIsSuccess] = useState<Toaster>({
    open: false,
    message: "",
  });
  const [overlapError, setOverlapError] = useState<boolean>(false);

  const handleCloseModal = () => {
    setOverlapError(false);
    handleModal({
      mode: "reset",
      open: false,
    });
    setDateRange({
      startDate: undefined,
      endDate: undefined,
    });
    setActiveBooking(undefined);
    setActiveLocation(undefined);
  };

  const getModalType = () => {
    if (activeBooking && activeLocation) {
      return (
        <EditBookingModal
          activeBooking={activeBooking}
          setIsSuccess={setIsSuccess}
          setOverlapError={setOverlapError}
          overlapError={overlapError}
          handleCloseModal={handleCloseModal}
          dateRange={dateRange}
          setDateRange={setDateRange}
          activeLocation={activeLocation}
        />
      );
    }
    if (activeLocation) {
      return (
        <CreateBookingModal
          activeLocation={activeLocation}
          setIsSuccess={setIsSuccess}
          setOverlapError={setOverlapError}
          overlapError={overlapError}
          handleCloseModal={handleCloseModal}
          dateRange={dateRange}
          setDateRange={setDateRange}
        />
      );
    }
  };

  return (
    <>
      {getModalType()}
      <Snackbar
        open={isSuccess.open}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        autoHideDuration={6000}
        onClose={() => setIsSuccess({ open: false, message: "" })}
      >
        <Alert
          severity="success"
          variant="filled"
          onClose={() => setIsSuccess({ open: false, message: "" })}
        >
          {isSuccess.message}
        </Alert>
      </Snackbar>
    </>
  );
};
