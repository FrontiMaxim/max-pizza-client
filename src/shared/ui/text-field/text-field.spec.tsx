import { render, screen } from "@testing-library/react";
import { TextField } from "./text-field";

describe("TextField", () => {
  it("render input", async () => {
    render(<TextField title="title" placeholder="placeholder" name="name" />);

    const input = await screen.findByPlaceholderText("placeholder", {
      exact: true,
    });

    expect(input).toBeInTheDocument();
    expect(input).toBeVisible();
    expect(input).toHaveStyle({ borderColor: "#cecece" });
  });
});
