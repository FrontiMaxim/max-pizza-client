import { render, screen } from "@testing-library/react";
import { TextField } from "./text-field";
import { userEvent } from "@testing-library/user-event";

describe("TextField", () => {
  it("shound input is render", async () => {
    render(<TextField title="title" placeholder="placeholder" name="name" />);

    const inputElement = await screen.findByPlaceholderText("placeholder", {
      exact: true,
    });

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toBeVisible();
  });

  it("should value is 'text'", async () => {
    render(<TextField title="title" placeholder="placeholder" name="name" />);

    const inputElement = await screen.findByPlaceholderText("placeholder", {
      exact: true,
    });

    await userEvent.click(inputElement);
    await userEvent.keyboard("text");

    expect(inputElement).toHaveValue("text");
  });

  it("should focused", async () => {
    render(<TextField title="title" placeholder="placeholder" name="name" />);

    const inputElement = await screen.findByPlaceholderText("placeholder", {
      exact: true,
    });

    await userEvent.click(inputElement);

    expect(inputElement).toHaveFocus();
  });

  it("should error is render", async () => {
    render(
      <TextField
        title="title"
        placeholder="placeholder"
        name="name"
        error="error"
      />
    );

    const errorElement = await screen.findByText("error");

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toBeVisible();
  });

  it("should input`s view is default state", async () => {
    render(<TextField title="title" placeholder="placeholder" name="name" />);

    const inputElement = await screen.findByPlaceholderText("placeholder", {
      exact: true,
    });

    expect(inputElement).toMatchSnapshot();
  });

  it("should input`s view is error state", async () => {
    render(
      <TextField
        title="title"
        placeholder="placeholder"
        name="name"
        error="error"
      />
    );

    const inputElement = await screen.findByPlaceholderText("placeholder", {
      exact: true,
    });

    expect(inputElement).toMatchSnapshot();
  });
});
