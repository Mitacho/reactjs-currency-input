import React from "react";

import { render, screen } from "@testing-library/react";

import { Input } from "../components";

test("CurrencyInput", () => {
  render(<Input.Currency onChangeValue={() => {}} />);

  expect(screen.queryByText("R$")).toBeInTheDocument();
});
