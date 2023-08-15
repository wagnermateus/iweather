import { getNextDays } from "./getNextDays";

describe("getNexDays", () => {
  it("should be render the next five days", () => {
    const days = getNextDays();

    expect(days.length).toBe(5);
  });
});
