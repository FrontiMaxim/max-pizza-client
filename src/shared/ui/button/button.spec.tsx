import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { Button } from "./button";
import { vi } from "vitest";

describe("Button", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("shound button is render", async () => {
    render(<Button>button</Button>);

    const buttonElement = await screen.findByRole("button");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toBeVisible();
  });

  it("should content is 'button'", async () => {
    render(<Button>button</Button>);

    const buttonElement = await screen.findByRole("button");

    expect(buttonElement.textContent).toBe("button");
  });

  it("should focused", async () => {
    render(<Button>button</Button>);

    const buttonElement = await screen.findByRole("button");
    await userEvent.click(buttonElement);

    expect(buttonElement).toHaveFocus();
  });

  it("should variant is primary", async () => {
    render(<Button variant="primary">button</Button>);

    const buttonElement = await screen.findByRole("button");

    expect(buttonElement).toMatchSnapshot();
  });

  it("should variant is default", async () => {
    render(<Button variant="default">button</Button>);

    const buttonElement = await screen.findByRole("button");

    expect(buttonElement).toMatchSnapshot();
  });

  it("should variant is secondary", async () => {
    render(<Button variant="secondary">button</Button>);

    const buttonElement = await screen.findByRole("button");

    expect(buttonElement).toMatchSnapshot();
  });

  it("should state is disabled ", async () => {
    render(<Button disabled>button</Button>);

    const buttonElement = await screen.findByRole("button");

    expect(buttonElement).toMatchSnapshot();
  });

  it("should handler click is called ", async () => {
    const mockHandleClick = vi.fn();

    render(<Button onClick={mockHandleClick}>button</Button>);

    const buttonElement = await screen.findByRole("button");

    await userEvent.click(buttonElement);

    expect(mockHandleClick).toHaveBeenCalledTimes(1);
  });

  it("should handler click returned value", async () => {
    const mockHandleClick = vi.fn().mockImplementation(() => 1);

    render(<Button onClick={mockHandleClick}>button</Button>);

    const buttonElement = await screen.findByRole("button");

    await userEvent.click(buttonElement);

    expect(mockHandleClick).toHaveReturnedWith(1);
  });

  it("should not click when state is disable", async () => {
    const mockHandleClick = vi.fn();

    render(
      <Button onClick={mockHandleClick} disabled>
        button
      </Button>
    );

    const buttonElement = await screen.findByRole("button");

    await userEvent.click(buttonElement);

    expect(mockHandleClick).not.toHaveBeenCalled();
  });
});
