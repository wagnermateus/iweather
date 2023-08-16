import { render, screen, fireEvent } from "@testing-library/react-native";

import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be return city details selected", async () => {
    const data = [
      { id: "1", name: "Nova Vida", latitude: 123, longitude: 456 },
      { id: "2", name: "Talatona", latitude: 123, longitude: 456 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/nova vida/i);

    fireEvent.press(selectedCity);

    expect(onPress).toBeCalledWith(data[0]);
  });
});
