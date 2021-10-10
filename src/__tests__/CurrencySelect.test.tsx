import React from "react";

import { Select } from "../components";

import { render, screen } from "@testing-library/react";

import type { Symbols } from "../utils/currency";

const currencyOptions: Array<Option> = [
  {
    label: "BRL",
    value: "BRL",
  },
  {
    label: "USD",
    value: "USD",
  },
];

type Option = {
  label: Symbols;
  value: Symbols;
};

test("Currency select", () => {
  const handleChangeCurrency = jest.fn();

  render(
    <Select.Currency
      options={currencyOptions}
      value={currencyOptions[0].value}
      handleChange={handleChangeCurrency}
    />
  );

  expect(screen.queryByText(currencyOptions[0].value)).toBeInTheDocument();
});
