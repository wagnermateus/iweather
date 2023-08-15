import { getNextDays } from "./getNextDays";

test("should be render the next five days", () => {
  const days = getNextDays();

  expect(days.length).toBe(5);
});
