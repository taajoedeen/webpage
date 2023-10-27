import { render, screen } from "@testing-library/react"; // Import render and screen
import App from "./App";

test("renders the header", () => {
  render(<App />);
  const headerElement = screen.getByText("Our Clothing Brand");
  expect(headerElement).toBeInTheDocument();
});
