import { render } from "@testing-library/react-native";
import { Input } from ".";
describe("Component: Input", () => {
  it("should  be render without activity indicator", () => {
    const { debug } = render(<Input />);

    debug();
  });
});
