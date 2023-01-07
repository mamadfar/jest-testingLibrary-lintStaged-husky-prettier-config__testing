import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";

it("Test hello world", () => {
  render(<Hello />);
  expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
