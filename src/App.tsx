import React from "react";

import {
  Input,
  Main,
  Section,
  Navbar,
  Title,
  Select,
  Container,
} from "./components";

import { StyleSheet } from "./styles";

import type { Symbols } from "./utils/currency";

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

export default function App(): JSX.Element {
  const [value, setValue] = React.useState<number>(0);
  const [currency, setCurrency] = React.useState<Symbols>(
    currencyOptions[0].value
  );

  function handleChangeInputValue(value: number): void {
    setValue(value);
  }

  function handleChangeCurrency(
    event: React.ChangeEvent<HTMLSelectElement>
  ): void {
    const currency: string = event.target.value;

    setCurrency(currency as Symbols);
  }

  React.useEffect(() => {
    console.log("value: ", value);
  }, [value]);

  return (
    <React.Fragment>
      <Navbar>
        <Title>Currency</Title>
        <Container style={styles.select}>
          <Select.Currency
            value={currency}
            options={currencyOptions}
            handleChange={handleChangeCurrency}
          />
        </Container>
      </Navbar>
      <Main style={styles.main}>
        <Section>
          <Input.Currency
            symbol={currency}
            handleChange={handleChangeInputValue}
          />
        </Section>
      </Main>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    padding: "1rem",
  },

  select: {
    marginLeft: "1rem",
  },
});
