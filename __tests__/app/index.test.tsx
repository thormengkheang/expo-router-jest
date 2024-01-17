import { renderRouter, screen } from "expo-router/testing-library";

import DetailsScreen from "../../app/details";
import HomeScreen from "../../app/index";

describe("Navigation", () => {
  it("has / path", async () => {
    renderRouter(
      {
        index: HomeScreen,
        details: DetailsScreen,
      },
      {
        initialUrl: "/",
      },
    );

    expect(screen).toHavePathname("/home");
  });
});
