import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Button from "../../../components/common/Button";

// Tests
describe("Button Component", () => {
  test("Link로 렌더링되는 경우", () => {
    render(
      <MemoryRouter>
        <Button to="/about">Go to About</Button>
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link", { name: "Go to About" });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/about");
  });

  test("Button으로 렌더링되는 경우", () => {
    render(<Button>Click me</Button>);

    const buttonElement = screen.getByRole("button", { name: "Click me" });
    expect(buttonElement).toBeInTheDocument();
  });

  test("올바른 클래스가 적용되는지 확인 (primary contained)", () => {
    render(
      <Button intent="primary" variant="contained">
        Contained Button
      </Button>
    );

    const buttonElement = screen.getByRole("button", {
      name: "Contained Button",
    });
    expect(buttonElement).toHaveClass(
      "px-3 py-1 border hover:brightness-95 rounded-md"
    );
    expect(buttonElement).toHaveClass("border-blue-500 bg-blue-500 text-white");
  });

  test("올바른 클래스가 적용되는지 확인 (secondary outline)", () => {
    render(
      <Button intent="secondary" variant="outline">
        Outline Button
      </Button>
    );

    const buttonElement = screen.getByRole("button", {
      name: "Outline Button",
    });
    expect(buttonElement).toHaveClass("border-slate-500 text-slate-500");
  });

  test("fontSize가 적용되는지 확인 (lg)", () => {
    render(<Button fontSize="lg">Large Button</Button>);

    const buttonElement = screen.getByRole("button", { name: "Large Button" });
    expect(buttonElement).toHaveClass("text-lg");
  });
});
