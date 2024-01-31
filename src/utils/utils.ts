import { DateRange as DateRangeProps } from "@mui/x-date-pickers-pro";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

import { DateRange as DateRangeTypes, Location } from "@/types/types";

dayjs.extend(isBetween);

export const getTotalPrice = (
  start: Date | undefined,
  end: Date | undefined,
  price: number
) => {
  if (end) {
    const days = dayjs(end).diff(start, "days") + 1;
    return price * days;
  }
  return price;
};

export const getNumberOfDays = (start?: Date, end?: Date) => {
  return end ? dayjs(end).diff(start, "days") + 1 : 0;
};

export const checkOverlaps = (
  value: DateRangeProps<dayjs.Dayjs>,
  activeLocation: Location
) => {
  let isOverlap = false;
  const start = value[0]?.toDate();
  const end = value[1]?.toDate();
  if (start && end) {
    activeLocation.reservations.forEach(reservation => {
      const checkForOverlap = dayjs(reservation.startDate).isBetween(
        start,
        end,
        "day",
        "[]"
      );
      if (checkForOverlap) {
        isOverlap = true;
      }
    });
  }
  return isOverlap;
};

export const shouldDisableDays = (
  day: dayjs.Dayjs,
  activeLocation: Location
) => {
  let check = false;
  activeLocation.reservations.forEach(reservation => {
    if (
      day.isBetween(reservation.startDate, reservation.endDate, "day", "[]")
    ) {
      check = true;
    }
  });
  return check;
};
