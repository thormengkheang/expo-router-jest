import { render, screen } from "@testing-library/react-native";
import React from "react";

import App from "./App";

describe("<App />", () => {
  it("has text", () => {
    render(<App />);
    expect(
      screen.getByText("Open up App.js to start working on your app!")
    ).toBeOnTheScreen();
  });

  it("render correctly", () => {
    render(<App />);
    expect(screen).toMatchSnapshot();
  });
});
