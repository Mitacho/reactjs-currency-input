export const SYMBOL: Symbol = {
  BRL: "R$",
  USD: "$",
};

export const FRACTIONAL_SEPARETOR: FractionalSeparator = {
  BRL: ".",
  USD: ",",
};

export const SCREEN_READERS: ScreenReaders = {
  BRL: {
    fraction: "reais e",
    cents: "centavos",
  },
  USD: {
    fraction: "dollars and",
    cents: "cents",
  },
};

export type Symbols = "BRL" | "USD";
export type FractionalSeparators = "," | ".";

export type Symbol = {
  [key in Symbols]: string;
};

export type FractionalSeparator = {
  [key in Symbols]: FractionalSeparators;
};

export type ScreenReaders = {
  [key in Symbols]: {
    fraction: string;
    cents: string;
  };
};

export default class Currency {
  static format(amount: string | number): string {
    return Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(Number(amount) / 100);
  }

  static formatFraction(amount: string, symbol: Symbols): string[] {
    return amount
      .padStart(1, "0")
      .toLocaleString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, FRACTIONAL_SEPARETOR[symbol])
      .split("");
  }

  static formatCents(amount: string): string[] {
    return amount.padStart(2, "0").split("");
  }
}
