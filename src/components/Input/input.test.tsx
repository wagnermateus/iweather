import { render, screen } from "@testing-library/react-native";
import { Input } from ".";
describe("Component: Input", () => {
  it("should  be render without activity indicator", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activity-indicator");

    console.log(activityIndicator);
  });
});
