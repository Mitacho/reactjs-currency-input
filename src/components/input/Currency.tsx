import React from "react";

import { StyleSheet } from "../../styles";

import Currency, { SYMBOL, SCREEN_READERS } from "../../utils/currency";

import type { Symbols } from "../../utils/currency";

type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {
  symbol?: Symbols;
  handleChange: (value: number) => void;
};

type Amount = {
  fraction: string;
  cents: string;
};

const MAX_NUMBER: number = 10;

export default function CurrencyInput({
  symbol = "BRL",
  handleChange,
}: Props): JSX.Element {
  const [value, setValue] = React.useState<number>(0);
  const [amount, setAmount] = React.useState<Amount>({
    fraction: "0",
    cents: "0",
  });

  function handleChangeAmount(
    event: React.ChangeEvent<HTMLInputElement>
  ): void {
    let value: number = Number(event.target.value.replace(/\D/g, ""));
    const isValidInput: boolean = event.target.validity.valid;

    if (!isValidInput) {
      return;
    }

    if (String(value).length > MAX_NUMBER) {
      return;
    }

    if (isNaN(value)) {
      value = 0;
    }

    setAmount({
      fraction: value.toString().slice(0, -2),
      cents: value.toString().substr(-2),
    });
    setValue(value);

    handleChange(value);
  }

  return (
    <label htmlFor="amount" style={styles.price}>
      <span style={styles.srOnly}>
        {amount.fraction &&
          `${amount.fraction} ${SCREEN_READERS[symbol].fraction}`}{" "}
        {amount.cents} {SCREEN_READERS[symbol].cents}
      </span>
      <span aria-hidden="true">
        <span
          style={{
            ...styles.symbol,
            ...(amount.fraction.length >= 5 && {
              fontSize: "1.05rem",
            }),
            ...(amount.fraction.length < 5 && {
              fontSize: "1.975rem",
            }),
          }}
          itemProp="priceCurrency"
        >
          {SYMBOL[symbol]}{" "}
        </span>
        <span
          style={{
            ...styles.fraction,
            ...(amount.fraction.length >= 5 && {
              fontSize: "2.475rem",
            }),
            ...(amount.fraction.length < 5 && {
              fontSize: "4.25rem",
            }),
          }}
        >
          {Currency.formatFraction(amount.fraction, symbol)}
        </span>
        <span
          style={{
            ...styles.cents,
            ...(amount.fraction.length >= 5 && {
              fontSize: "1.05rem",
            }),
            ...(amount.fraction.length < 5 && {
              fontSize: "1.975rem",
            }),
          }}
        >
          {Currency.formatCents(amount.cents)}
        </span>
      </span>
      <input
        type="tel"
        name="amount"
        id="amount"
        pattern="[0-9]*"
        autoFocus
        aria-hidden="true"
        style={styles.srOnly}
        value={value}
        onChange={handleChangeAmount}
      />
    </label>
  );
}

const styles = StyleSheet.create({
  srOnly: {
    position: "absolute",

    width: "1px",
    height: "1px",

    padding: 0,
    margin: "-1px",

    overflow: "hidden",

    clip: "rect(0, 0, 0, 0)",

    whiteSpace: "nowrap",

    borderWidth: 0,
  },

  price: {
    display: "inline-block",
  },

  fraction: {
    verticalAlign: "text-top",

    lineHeight: 1,
  },

  symbol: {
    lineHeight: 1.4,

    verticalAlign: "text-top",

    marginRight: "0.3rem",
  },

  cents: {
    lineHeight: 1.4,

    verticalAlign: "text-top",

    marginLeft: "0.3rem",
  },
});
