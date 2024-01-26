import { fireEvent, renderRouter, screen } from "expo-router/testing-library";

import DetailsScreen from "../../app/details";
import HomeScreen from "../../app/index";

const renderAllRoutes = () => {
  renderRouter(
    {
      index: HomeScreen,
      details: DetailsScreen,
    },
    {
      initialUrl: "/",
    }
  );
};
describe("Navigation", () => {
  renderAllRoutes();
  it("has / path", async () => {
    expect(screen).toHavePathname("/");
  });

  it("has /details path", async () => {
    renderAllRoutes();
    const detail = await screen.findByRole("link", { name: "Go to Details" });
    fireEvent.press(detail);
    expect(screen.queryByText("Update the title")).toBeOnTheScreen();
  });
});
