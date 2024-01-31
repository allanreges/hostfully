import dayjs from "dayjs";

import { checkOverlaps, getNumberOfDays, shouldDisableDays } from "./utils";

const mockActiveLocation = {
  id: "b8723f2d-6d0c-42f6-8b86-d0a35189e6d7",
  location: "Los Angeles, CA",
  price: 150,
  name: "Cozy House in Hollywood Hills",
  type: "House",
  image: "",
  reservations: [
    {
      startDate: new Date("01/01/2024"),
      endDate: new Date("01/24/2024"),
      id: "1212",
    },
    {
      startDate: new Date("02/01/2024"),
      endDate: new Date("02/12/2024"),
      id: "124543",
    },
  ],
  details:
    "Charming house nestled in the Hollywood Hills, offering a cozy retreat with scenic views.",
};

describe("get total number of days", () => {
  it('should return 24 for the dates "01/01/2024" and "01/24/2024"', () => {
    const startDate = new Date("01/01/2024");
    const endDate = new Date("01/24/2024");
    expect(getNumberOfDays(startDate, endDate)).toBe(24);
  });

  it('should return 1 for the same date "01/01/2024"', () => {
    const date = new Date("01/01/2024");
    expect(getNumberOfDays(date, date)).toBe(1);
  });
});

describe("check for dates overlaps", () => {
  it("should return true because there is an overlap", () => {
    expect(
      checkOverlaps(
        [dayjs("01/01/2024"), dayjs("01/10/2024")],
        mockActiveLocation
      )
    ).toBe(true);
  });

  it("return false because there is no overlap", () => {
    expect(
      checkOverlaps(
        [dayjs("03/01/2024"), dayjs("03/10/2024")],
        mockActiveLocation
      )
    ).toBe(false);
  });

  it("return false because there is no range provided", () => {
    expect(checkOverlaps([null, null], mockActiveLocation)).toBe(false);
  });

  it("return false because only start date was provided", () => {
    expect(checkOverlaps([dayjs("03/01/2024"), null], mockActiveLocation)).toBe(
      false
    );
  });

  it("return false because only end date was provided", () => {
    expect(checkOverlaps([null, dayjs("03/10/2024")], mockActiveLocation)).toBe(
      false
    );
  });
});

describe("should return if a date is disabled", () => {
  it("should return true because date is already booked", () => {
    expect(shouldDisableDays(dayjs("01/09/2024"), mockActiveLocation)).toBe(
      true
    );
  });

  it("should return false because date is available", () => {
    expect(shouldDisableDays(dayjs("03/09/2024"), mockActiveLocation)).toBe(
      false
    );
  });
});
