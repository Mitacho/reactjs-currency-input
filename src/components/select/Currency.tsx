import React from "react";

import { StyleSheet } from "../../styles";

import type { Symbols } from "../../utils/currency";

type Props = React.DetailsHTMLAttributes<HTMLElement> & {
  options: Array<Option>;
  value: Option["value"];
  handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

type Option = {
  label: Symbols;
  value: Symbols;
};

export default function Currency(props: Props): JSX.Element {
  return (
    <select
      value={props.value}
      onChange={props.handleChange}
      style={styles.select}
      name="select-currency"
    >
      {props.options.map((option) => (
        <option value={option.value} key={option.value} style={styles.option}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

const styles = StyleSheet.create({
  select: {
    appearance: "none",

    backgroundColor: "#5F6368",
    color: "inherit",

    borderRadius: "0.25rem",
    border: "none",
    outline: "none",

    padding: "0.325em 1rem",
    margin: "0",

    width: "100%",

    lineHeight: "inherit",
  },

  option: {
    cursor: "pointer",

    backgroundColor: "#303134",
    color: "inherit",
  },
});
