import {
  DateRange as DateRangeProps,
  LocalizationProvider,
} from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

import { DateRange as DateRangeTypes, Location } from "@/types/types";
import { checkOverlaps, shouldDisableDays } from "@/utils/utils";

import { Container } from "./styles";

dayjs.extend(isBetween);

export type DateType = {
  dateRange: DateRangeTypes;
  setDateRange: ({ startDate, endDate }: DateRangeTypes) => void;
  overlapError: boolean;
  setOverlapError: (value: boolean) => void;
  activeLocation: Location;
};

export const DateRange: React.FC<DateType> = ({
  dateRange,
  setDateRange,
  overlapError,
  setOverlapError,
  activeLocation,
}) => {
  const handleDateChange = (value: DateRangeProps<dayjs.Dayjs>) => {
    setOverlapError(false);
    setDateRange({
      startDate: value[0]?.toDate(),
      endDate: value[1]?.toDate(),
    });
    if (checkOverlaps(value, activeLocation)) setOverlapError(true);
  };

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateRangePicker
          disablePast
          defaultValue={[dayjs(dateRange.startDate), dayjs(dateRange.endDate)]}
          value={[dayjs(dateRange.startDate), dayjs(dateRange.endDate)]}
          shouldDisableDate={day => shouldDisableDays(day, activeLocation)}
          localeText={{ start: "Check-in", end: "Check-out" }}
          slotProps={{
            textField: {
              required: true,
              error: overlapError,
              name: `date-picker`,
              helperText: overlapError
                ? "Your reservation is overlapping with another reservation, please select a new date"
                : "",
            },
          }}
          onChange={value => handleDateChange(value)}
        />
      </LocalizationProvider>
    </Container>
  );
};
